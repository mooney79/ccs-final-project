// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import WellHoles from './WellHoles';
import WellCasings from './WellCasings';
import WellCements from './WellCements';
import WellPerfs from './WellPerfs';
import WellPlugs from './WellPlugs';
import Spinner from 'react-bootstrap/esm/Spinner';
import { withRouter } from 'react-router-dom';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import DeleteWellModal from './DeleteWellModal';
import PlatImageModal from './PlatImageModal';
import Diagram from './Diagram';
import Button from 'react-bootstrap/esm/Button';
// import Collapse from 'react-bootstrap/esm/Collapse';

function WellViewToo(props) {
    
    const $faImage = <FontAwesomeIcon icon={faImage} />
    const $faCaret = <FontAwesomeIcon icon={faCaretUp} size="3x" />
    const $faTrashAlt = <FontAwesomeIcon icon={faTrashAlt} inverse pull="right" className="highlight2" size="2x"/>
    const [wellFeatures, setWellFeatures] = useState([]);
    const [wellHoles, setWellHoles] = useState([]);
    const [wellCasings, setWellCasings] = useState([]);
    const [wellCements, setWellCements] = useState([]);
    const [wellPerfs, setWellPerfs] = useState([]);
    const [wellPlugs, setWellPlugs] = useState([]);
    const [deleteTarget, setDeleteTarget] = useState({});
    const [showDelete, setShowDelete] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const [showWellDel, setShowWellDel] = useState(false);
    const [showImage, setShowImage] = useState(false);
    // const [showCollapse, setShowCollapse] = useState(false);
    let wellHolesHTML;
    let wellCasingsHTML;
    let wellCementsHTML;
    let wellPerfsHTML;
    let wellPlugsHTML;
    // let marginStyle={marginTop: "101vh"}
    /*
    <div id="popup" className="plat-pop-up"> I'm a PLAT!</div>
    */
    
    // console.log(props);
    function displayPopup() {
        setShowImage(true);
        // const $popup = document.getElementById('popup');
        // if ($popup.style.display === 'none'){
        //     $popup.style.display = 'block';
        // } else {
        //     $popup.style.display = 'none';
        // }
    }
    

    const handleChange = (event) => {
        const {name, value} = event.target;
        props.setWell({...props.well, [name]: value});
    }

    function formatDate() {
        const rawDate = props.well.updated_at;
        const year = rawDate.slice(0,4);
        const month = rawDate.slice(5,7);
        const day = rawDate.slice(9,10);
        return month + '/' + day + '/' + year;
    }

    useEffect(() => {
          
        const fetchWell = async () => {
            const response = await fetch(`/api/wells/${props.match.params.id}/`, 
            {headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.get('csrftoken'),
                    }
            });
            if (!response.ok) {
                console.log('Error fetching well');
            } else {
                const data = await response.json();                
                props.setWell(data);               
            }
          }


        const fetchWellFeatures = async () => {
                      
            const response = await fetch(`/api/wells/${props.match.params.id}/features`, 
            {headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.get('csrftoken'),
                    }
            });
            if (!response.ok) {
                console.log('Error fetching well features');
            } else {
                const data = await response.json();
                setWellFeatures(data);
                setWellHoles(data.holes);
                setWellCasings(data.casings);
                setWellCements(data.cements);
                setWellPerfs(data.perforations);
                setWellPlugs(data.plugs);
            }
        }
        
        fetchWell();
        fetchWellFeatures();
        setShowDelete(false);        
    }, [refresh]);

    useEffect(() => {
        if (showDelete === false && isClicked === true) {
            setShowDelete(true);
        } else {
            setShowDelete(false)
        }
    },[isClicked]);//showDelete

    async function handleBlur(event){
        const propertyName = event.target.name;
        const value = event.target.value;
        // const {propertyName, value} = event.target;
        // console.log(event.target);
        const options = {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({[propertyName]: value})
        };
        const response = await fetch(`/api/wells/${props.match.params.id}/`, options);
        if (!response.ok) {
            console.log('Error updating well information');
        }
        // const data = await response.json();
        // console.log(propertyName, value);
        if (propertyName === "total_depth"){
            setRefresh(Math.random());
        }

    }

    const handleHoleChange = (event) => {
        const id = event.target.id;
        const propertyName = event.target.name;
        const value = event.target.value;
        let index = wellHoles.findIndex((hole) => hole.id === parseInt(id));
        let test = [...wellHoles]
        test[index][propertyName] = value;
        setWellHoles(test);
    }

    async function handleHoleBlur(event){
        const id = event.target.id;
        const propertyName = event.target.name;
        const value = event.target.value;
        console.log(event.target);
        console.log(event.target.id);
        console.log(id)
        const options = {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({[propertyName]: value})
        };
        const response = await fetch(`/api/wells/holes/${id}/`, options);
        if (!response.ok) {
            console.log('Error updating hole information');
        }
        // const data = await response.json();
    }
    
    if (wellHoles === []){
        wellHolesHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    } else {
        wellHolesHTML = wellHoles.map(hole => <WellHoles key={hole.id+1000} {...hole} setWellHoles={setWellHoles} handleHoleChange={handleHoleChange} handleHoleBlur={handleHoleBlur} deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} setIsClicked={setIsClicked} setRefresh={setRefresh} handleHoleKeyPress={handleHoleKeyPress}/>)        
    }

    const handleCasingChange = (event) => {
        const {name, value, id} = event.target;
        let index = wellCasings.findIndex(casing => casing.id === parseInt(id));
        let test = [...wellCasings]
        test[index][name] = value;
        setWellCasings(test);
    }

    async function handleCasingBlur(event){
        const id = event.target.id;
        const propertyName = event.target.name;
        const value = event.target.value;
        const options = {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({[propertyName]: value})
        };
        const response = await fetch(`/api/wells/casings/${id}/`, options);
        if (!response.ok) {
            console.log('Error updating casing information');
        }
        // const data = await response.json();
    }

    if (wellCasings !== []){
        wellCasingsHTML = wellCasings.map(casing => <WellCasings key={casing.id+2000} {...casing} handleCasingChange={handleCasingChange} handleCasingBlur={handleCasingBlur} deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} setIsClicked={setIsClicked} setRefresh={setRefresh} handleCasingKeyPress={handleCasingKeyPress}/>)
    } else {
        wellCasingsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    const handleCementChange = (event) => {
        const {name, value, id} = event.target;
        let index = wellCements.findIndex(cement => cement.id === parseInt(id));
        let test = [...wellCements]
        test[index][name] = value;
        setWellCements(test);
    }

    async function handleCementBlur(event){
        const id = event.target.id;
        const propertyName = event.target.name;
        const value = event.target.value;
        const options = {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({[propertyName]: value})
        };
        const response = await fetch(`/api/wells/cements/${id}/`, options);
        if (!response.ok) {
            console.log('Error updating cement information');
        }
        // const data = await response.json();
    }

    if (wellCements !== []){
        wellCementsHTML = wellCements.map(cement => <WellCements key={cement.id+3000} {...cement} handleCementChange={handleCementChange} handleCementBlur={handleCementBlur} deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} setIsClicked={setIsClicked} setRefresh={setRefresh} handleCementKeyPress={handleCementKeyPress}/>)
    } else {
        wellCementsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    const handlePerforationChange = (event) => {
        const {name, value, id} = event.target;
        let index = wellPerfs.findIndex(perf => perf.id === parseInt(id));
        let test = [...wellPerfs]
        test[index][name] = value;
        setWellPerfs(test);
    }

    async function handlePerforationBlur(event){
        const id = event.target.id;
        const propertyName = event.target.name;
        const value = event.target.value;
        const options = {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({[propertyName]: value})
        };
        const response = await fetch(`/api/wells/perforations/${id}/`, options);
        if (!response.ok) {
            console.log('Error updating perforation information');
        }
        // const data = await response.json();
    }

    if (wellPerfs !== []){
        wellPerfsHTML = wellPerfs.map(perf => <WellPerfs key={perf.id+4000} {...perf} handlePerforationChange={handlePerforationChange} handlePerforationBlur={handlePerforationBlur} deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} setIsClicked={setIsClicked} setRefresh={setRefresh} handlePerfKeyPress={handlePerfKeyPress}/>)
    } else {
        wellPerfsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    const handlePlugChange = (event) => {
        const {name, value, id} = event.target;
        let index = wellPlugs.findIndex(plug => plug.id === parseInt(id));
        let test = [...wellPlugs]
        test[index][name] = value;
        setWellPlugs(test);
    }

    async function handlePlugBlur(event){
        const id = event.target.id;
        const propertyName = event.target.name;
        const value = event.target.value;
        const options = {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({[propertyName]: value})
        };
        const response = await fetch(`/api/wells/plugs/${id}/`, options);
        if (!response.ok) {
            console.log('Error updating plug information');
        }
        // const data = await response.json();
    }


    if (wellPlugs !== []){
        wellPlugsHTML = wellPlugs.map(plug => <WellPlugs key={plug.id+5000} {...plug} handlePlugChange={handlePlugChange} handlePlugBlur={handlePlugBlur} deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} setIsClicked={setIsClicked} setRefresh={setRefresh} handlePlugKeyPress={handlePlugKeyPress}/>)
    } else {
        wellPlugsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    function handleKeyPress(e) {
        if (e.key=== 'Enter') {
            handleBlur(e)
            e.target.blur();
        }
    }

    function handleHoleKeyPress(e) {
        if (e.key=== 'Enter') {
            handleHoleBlur(e)
            e.target.blur();
        }
    }

    function handleCasingKeyPress(e) {
        if (e.key=== 'Enter') {
            handleCasingBlur(e)
            e.target.blur();
        }
    }

    function handleCementKeyPress(e) {
        if (e.key=== 'Enter') {
            handleCementBlur(e)
            e.target.blur();
        }
    }

    function handlePerfKeyPress(e) {
        if (e.key=== 'Enter') {
            handlePerforationBlur(e)
            e.target.blur();
        }
    }

    function handlePlugKeyPress(e) {
        if (e.key=== 'Enter') {
            handlePlugBlur(e)
            e.target.blur();

        }
    }


    const createNewHole = async () => {
        const newHole = {
            well: props.match.params.id,
            starting_depth: 0,
            ending_depth: 0,
            hole_size: ''
        }
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(newHole)
        };
        const response = await fetch('/api/wells/holes/', options);
        if(!response){
            console.log(response);
        } else {
            // const data = await response.json();
            setWellHoles([...wellHoles, newHole]);
            setRefresh(Math.random())
        }
    };

    const createNewCasing = async () => {
        const newCasing = {
            well: props.match.params.id,
            starting_depth: 0,
            ending_depth: 0,
            casing_weight: '',
            casing_grading: '',
            gauge: 'sml',
        }
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(newCasing)
        };
        const response = await fetch('/api/wells/casings/', options);
        if(!response){
            console.log(response);
        } else {
            // const data = await response.json();
            setWellCasings([...wellCasings, newCasing]);
            setRefresh(Math.random())
        }
    };

    const createNewCement = async () => {
        const newCement = {
            well: props.match.params.id,
            starting_depth: 0,
            ending_depth: 0,
            sacks_pumped: 0,
            cement_type: '',
        }
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(newCement)
        };
        const response = await fetch('/api/wells/cements/', options);
        if(!response){
            console.log(response);
        } else {
            // const data = await response.json();
            setWellCements([...wellCements, newCement]);
            setRefresh(Math.random())
        }
    };
    
    const createNewPerforation = async () => {
        const newPerforation = {
            well: props.match.params.id,
            starting_depth: 0,
            ending_depth: 0,
            perforation_interval: '',
            perforation_total_holes: '',
        }
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(newPerforation)
        };
        const response = await fetch('/api/wells/perforations/', options);
        if(!response){
            console.log(response);
        } else {
            // const data = await response.json();
            setWellPerfs([...wellPerfs, newPerforation]);
            setRefresh(Math.random())
        }
    };

    const createNewPlug = async () => {
        const newPlug = {
            well: props.match.params.id,
            starting_depth: 0,
            ending_depth: 0,
            sacks_pumped: 0,
            cement_type: '',
        }
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(newPlug)
        };
        const response = await fetch('/api/wells/plugs/', options);
        if(!response){
            console.log(response);
        } else {
            // const data = await response.json();
            setWellPlugs([...wellPlugs, newPlug]);
            setRefresh(Math.random())
        }
    };

    function handleDeleteWell(event){
        setShowWellDel(true);
    }

    function handleBack(){
        props.setShowSplash(false)
        props.history.push('');
    }

    let wellInfoHTML;
    // style={marginStyle}
    if (props.well !== null) {
        wellInfoHTML = 
        <div className="well-info-grid" >
                <div className="well-view-grid-top">
                    <div className="left-group"> 
                        <h2>{props.well.lease} {props.well.well_number} <span className="icon" onClick={displayPopup}>{$faImage}</span> </h2>
                    </div>
                    <Button className="btn back-button" variant="warning" id="back-button" onClick={handleBack}> well selection </Button>
                    <div className="right-group">
                        
                        <span className="bold-span">Last Updated: </span>{formatDate()}
                        <span className="icon-trash-lrg" onClick={handleDeleteWell}>{$faTrashAlt}</span>
                    </div>                    
                    
                </div>
                <div className="well-table-id row">
                    <div className="col-lg-3">
                        <span className="bold-span">API Number: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="API_number" className="input-hidden" value={props.well.API_number} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Company: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="company" className="input-hidden" value={props.well.company} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Permit Number: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="permit_number"className="input-hidden" value={props.well.permit_number} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Current Status: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="current_status" className="input-hidden" value={props.well.current_status} />
                    </div>
                </div>
                <div className="well-table-location row">
                    <div className="col-lg-3">
                        <span className="bold-span">Location: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="location" className="input-hidden" value={props.well.location} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Section: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="section" className="input-hidden" value={props.well.section} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Survey: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="survey" className="input-hidden" value={props.well.survey} />
                    </div>
                    <div className="col-lg-3 county-state">
                        <div>
                            <span className="bold-span">County: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="county" className="input-hidden county" value={props.well.county} />
                        </div>
                        <div>
                            <span className="bold-span">State: </span> <input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="state" className="input-hidden state" value={props.well.state} />
                        </div>
                    </div>
                </div>
                <div className="well-table-field row">
                    <div className="col-lg-3">
                        <span className="bold-span">Field: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="field" className="input-hidden" value={props.well.field} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Initial Formation: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="initial_formation" className="input-hidden" value={props.well.initial_formation} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Spud Date: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="spud_date" className="input-hidden" value={props.well.spud_date} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Comp Date: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="completion_date" className="input-hidden" value={props.well.completion_date} />
                    </div>
                </div>
                <div className="well-table-depths row mb-3">
                    <div className="col-lg-3">
                        <span className="bold-span">Ground Level: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="ground_level" className="input-hidden" value={props.well.ground_level} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Kelley Bushing: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="kelley_bushing" className="input-hidden" value={props.well.kelley_bushing} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Derrick Floor: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="derrick_floor" className="input-hidden" value={props.well.derrick_floor} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Total Depth: </span><input type="text" onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress} name="total_depth" className="input-hidden" value={props.well.total_depth} />
                    </div>
                </div>
                <div className="labels row">
                    <div className="hole-col col">
                        <div className="showme">
                            <p className="label1"> HOLE</p>
                        </div>
                        <div className="scroll-area">
                            {wellHolesHTML}
                            <button className="new-feature-button" onClick={createNewHole}> Add New</button>
                        </div>
                    </div>
                    <div className="casing-col col">
                        <div className="showme">
                            <p className="label2">CASING</p>
                        </div>
                        <div className="scroll-area">
                            {wellCasingsHTML}
                            <button className="new-feature-button" onClick={createNewCasing}> Add New</button>
                        </div>
                    </div>
                    <div className="cement-col col">
                        <div className="showme" >
                            <p className="label3">CEMENT</p>
                        </div>
                        <div className="scroll-area">
                            {wellCementsHTML}
                            <button className="new-feature-button" onClick={createNewCement}> Add New</button>
                        </div>
                    </div>
                    <div className="perf-col col">
                        <div className="showme">
                            <p className="label4">PERFORATIONS</p>
                        </div>
                        <div className="scroll-area">
                            {wellPerfsHTML}
                            <button className="new-feature-button" onClick={createNewPerforation}> Add New</button>
                        </div>
                    </div>
                    <div className="plug-col col">
                        <div className="col showme">
                            <p className="label5">PLUGS</p>
                        </div>
                        <div className="scroll-area">
                            {wellPlugsHTML}
                            <button className="new-feature-button" onClick={createNewPlug}> Add New</button>
                        </div>
                    </div>
                </div>
            </div>;
    } else {
        wellInfoHTML = <div>Loading...<br />If this screen does not go away, you may not have permission to view this well.</div>;
    }

    // let diagramHTML;
    // if (window.innerWidth < 768) {
    //     diagramHTML = 
    //     <>
    //     <p onClick={() => setShowCollapse(!showCollapse)} 
    //     area-controls="diagram-collapse"
    //     aria-expanded={showCollapse}>
    //         Show/Hide</p>
    //     <Collapse in={showCollapse} >
    //     <div className="diagram-collapse">
    //             <Diagram wellFeatures={wellFeatures} wellCements={wellCements} wellCasings={wellCasings} wellPerfs={wellPerfs} wellPlugs={wellPlugs} well={props.well} refresh={refresh} />
    //     </div>
    //     </Collapse>
    //     </>
    // } else {
    //     diagramHTML =  <Diagram wellFeatures={wellFeatures} wellCements={wellCements} wellCasings={wellCasings} wellPerfs={wellPerfs} wellPlugs={wellPlugs} well={props.well} refresh={refresh} />
    // }
        
    
    // useEffect(() => {
    //     if (marginStyle==='margin-top: "101vh"'){
    //         marginStyle='margin-top: "1vh"';
    //     } else {
    //         marginStyle='margin-top: "101vh"';
    //     }        
    // }, [showCollapse])

    return (
        <>
        <div className="well-container-grid" id="top">
            {wellInfoHTML}
            <Diagram wellFeatures={wellFeatures} wellCements={wellCements} wellCasings={wellCasings} wellPerfs={wellPerfs} wellPlugs={wellPlugs} well={props.well} refresh={refresh} />
           {/* {diagramHTML} */}
           <a href="#top" className="float" id="float">
                <i className="my-float">{$faCaret}</i>
            </a>
        </div>
        <DeleteConfirmationModal deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} showDelete={showDelete} setShowDelete={setShowDelete} history={props.history} setRefresh={setRefresh} setIsClicked={setIsClicked}/>
            <DeleteWellModal history={props.history} setRefresh={setRefresh} showWellDel={showWellDel} setShowWellDel={setShowWellDel}/>
            <PlatImageModal well={props.well} setWell={props.setWell} showImage={showImage} setShowImage={setShowImage} history={props.history} refresh={refresh} setRefresh={setRefresh}/>
        </>
    );
};

export default withRouter(WellViewToo)



/*

<Collapse in={showCollapse}>
        <Diagram wellFeatures={wellFeatures} wellCements={wellCements} wellCasings={wellCasings} wellPerfs={wellPerfs} wellPlugs={wellPlugs} well={props.well} refresh={refresh} />
</Collapse>


<div className="well-info">
    <h2>{props.well.lease} {props.well.well_number}</h2>
    <button onClick={displayPopup}>  {$faImage} <br /> Plat Button </button>  
    <div id="popup" className="plat-pop-up"> I'm a PLAT!</div>
    I'm a well! 
</div>



let currentTarget;




// add when widget loads

... and finally some housekeeping

// remove listener when destroying the widget
window.removeEventListener("click", clickOut);




    // useEffect(() => {
    //     // setWellHoles(wellFeatures.holes);
    //     // setWellCasings(wellFeatures.casings);
    //     // setWellCements(wellFeatures.cements);
    //     // setWellPerfs(wellFeatures.perforations);
    //     // setWellPlugs(wellFeatures.plugs);
    // }, [wellFeatures]);

    //CHANGE TO NOT USE INNERHTML!
    // function editField(event){
    //     if (!selected){
    //         console.log(event);
    //         id = event.target.id;
    //         currentTarget = id;
    //         value = event.target.attributes.value.value;
    //         $active = document.getElementById(id)
    //         console.log(value);
    //         $active.innerHTML = `<input type='text' value=${value} />`;
    //         window.addEventListener("click", clickOut);
    //         console.log($active);
    //         selected = true;
    //     }
    // }

    // const clickOut = (event) => {
    //     if (!event.target.id.includes(currentTarget)) {
    //         selected = false;
    //         window.removeEventListener("click", clickOut);
    //         $active.innerHTML = `<span id=${id} value=${value} onClick={editField}>${value}</span>`
    //     }
    // };

fetch(‘https://jsonplaceholder.typicode.com/todos/1', {
method: ‘PATCH’,
body: JSON.stringify({
completed: true
}),
headers: {
“Content-type”: “application/json; charset=UTF-8”
}
})
.then(response => response.json())
.then(json => console.log(json))



async function handleBlur(event){
    event.preventDefault();
    const options = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(name: value)
    };
    const response = await fetch(``/api/wells/${props.match.params.id}/`, options);
    const data = await response.json();
    console.log('data', data);
}



const newHole = async () => {
    const newHole = {
        well: props.match.params.id,
        starting_depth: 0,
        ending_depth: 0,
        hole_size: ''
    }
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(newHole)
    };
    const response = await fetch('/api/wells/holes/', options);
    if(!response){
        console.log(response);
    } else {
        const data = await response.json();
        setWellHoles([...wellHoles, newHole]);
    }
};



*/