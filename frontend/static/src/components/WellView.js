// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
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

function WellView(props) {
    
    const $faImage = <FontAwesomeIcon icon={faImage} />
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
    let wellHolesHTML;
    let wellCasingsHTML;
    let wellCementsHTML;
    let wellPerfsHTML;
    let wellPlugsHTML;
    /*
    <div id="popup" className="plat-pop-up"> I'm a PLAT!</div>
    */
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
    },[isClicked]);

    async function handleBlur(event){
        const propertyName = event.target.name;
        const value = event.target.value;
        // const {propertyName, value} = event.target;
        console.log(event.target);
        const options = {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({[propertyName]: value})
        };
        const response = await fetch(`/api/wells/${props.match.params.id}/`, options);
        const data = await response.json();
        console.log(propertyName, value);
    }

    const handleHoleChange = (event) => {
        const id = event.target.id;
        const propertyName = event.target.name;
        const value = event.target.value;
        let index = wellHoles.findIndex((hole) => hole.id == id);
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
        const data = await response.json();
    }
    
    if (wellHoles === []){
        wellHolesHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    } else {
        wellHolesHTML = wellHoles.map(hole => <WellHoles key={hole.id+1000} {...hole} setWellHoles={setWellHoles} handleHoleChange={handleHoleChange} handleHoleBlur={handleHoleBlur} deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} setIsClicked={setIsClicked} setRefresh={setRefresh}/>)        
    }

    const handleCasingChange = (event) => {
        const {name, value, id} = event.target;
        let index = wellCasings.findIndex(casing => casing.id == id);
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
        const data = await response.json();
    }

    if (wellCasings !== []){
        wellCasingsHTML = wellCasings.map(casing => <WellCasings key={casing.id+2000} {...casing} handleCasingChange={handleCasingChange} handleCasingBlur={handleCasingBlur} deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} setIsClicked={setIsClicked} setRefresh={setRefresh}/>)
    } else {
        wellCasingsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    const handleCementChange = (event) => {
        const {name, value, id} = event.target;
        let index = wellCements.findIndex(cement => cement.id == id);
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
        const data = await response.json();
    }

    if (wellCements !== []){
        wellCementsHTML = wellCements.map(cement => <WellCements key={cement.id+3000} {...cement} handleCementChange={handleCementChange} handleCementBlur={handleCementBlur} deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} setIsClicked={setIsClicked} setRefresh={setRefresh}/>)
    } else {
        wellCementsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    const handlePerforationChange = (event) => {
        const {name, value, id} = event.target;
        let index = wellPerfs.findIndex(perf => perf.id == id);
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
        const data = await response.json();
    }

    if (wellPerfs !== []){
        wellPerfsHTML = wellPerfs.map(perf => <WellPerfs key={perf.id+4000} {...perf} handlePerforationChange={handlePerforationChange} handlePerforationBlur={handlePerforationBlur} deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} setIsClicked={setIsClicked} setRefresh={setRefresh}/>)
    } else {
        wellPerfsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    const handlePlugChange = (event) => {
        const {name, value, id} = event.target;
        let index = wellPlugs.findIndex(plug => plug.id == id);
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
        const data = await response.json();
    }


    if (wellPlugs !== []){
        wellPlugsHTML = wellPlugs.map(plug => <WellPlugs key={plug.id+5000} {...plug} handlePlugChange={handlePlugChange} handlePlugBlur={handlePlugBlur} deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} setIsClicked={setIsClicked} setRefresh={setRefresh}/>)
    } else {
        wellPlugsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
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
            const data = await response.json();
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
            const data = await response.json();
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
            const data = await response.json();
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
            const data = await response.json();
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
            const data = await response.json();
            setWellPlugs([...wellPlugs, newPlug]);
            setRefresh(Math.random())
        }
    };

    function handleDeleteWell(event){
        setShowWellDel(true);
    }

    let wellInfoHTML;
    if (props.well !== null) {
        wellInfoHTML = 
        <div className="well-info">
                <div className="well-table-top row">
                    <div className="col-lg-8"> 
                        <h2>{props.well.lease} {props.well.well_number} <span className="icon" onClick={displayPopup}>{$faImage}</span> </h2>
                    </div>
                    
                    <div className="col-lg-4 text-right">
                        <span className="icon-trash-lrg" onClick={handleDeleteWell}>{$faTrashAlt}</span>
                        <span className="bold-span">Last Updated: </span>{formatDate()}
                    </div>                    
                </div>
                <div className="well-table-id row">
                    <div className="col-lg-3">
                        <span className="bold-span">API Number: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="API_number" className="input-hidden" value={props.well.API_number} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Company: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="company" className="input-hidden" value={props.well.company} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Permit Number: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="permit_number"className="input-hidden" value={props.well.permit_number} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Current Status: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="current_status" className="input-hidden" value={props.well.current_status} />
                    </div>
                </div>
                <div className="well-table-location row">
                    <div className="col-lg-3">
                        <span className="bold-span">Location: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="location" className="input-hidden" value={props.well.location} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Section: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="section" className="input-hidden" value={props.well.section} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Survey: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="survey" className="input-hidden" value={props.well.survey} />
                    </div>
                    <div className="col-lg-3 county-state">
                        <div>
                            <span className="bold-span">County: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="county" className="input-hidden county" value={props.well.county} />
                        </div>
                        <div>
                            <span className="bold-span">State: </span> <input type="text" onChange={handleChange} onBlur={handleBlur} name="state" className="input-hidden state" value={props.well.state} />
                        </div>
                    </div>
                </div>
                <div className="well-table-field row">
                    <div className="col-lg-3">
                        <span className="bold-span">Field: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="field" className="input-hidden" value={props.well.field} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Initial Formation: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="initial_formation" className="input-hidden" value={props.well.initial_formation} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Spud Date: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="spud_date" className="input-hidden" value={props.well.spud_date} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Comp Date: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="completion_date" className="input-hidden" value={props.well.completion_date} />
                    </div>
                </div>
                <div className="well-table-depths row mb-3">
                    <div className="col-lg-3">
                        <span className="bold-span">Ground Level: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="ground_level" className="input-hidden" value={props.well.ground_level} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Kelley Bushing: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="kelley_bushing" className="input-hidden" value={props.well.kelley_bushing} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Derrick Floor: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="derrick_floor" className="input-hidden" value={props.well.derrick_floor} />
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Total Depth: </span><input type="text" onChange={handleChange} onBlur={handleBlur} name="total_depth" className="input-hidden" value={props.well.total_depth} />
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
        wellInfoHTML = <div>Loading...</div>;
    }
        
    return (
        <div className="well-container">
            {wellInfoHTML}
            <DeleteConfirmationModal deleteTarget={deleteTarget} setDeleteTarget={setDeleteTarget} showDelete={showDelete} setShowDelete={setShowDelete} history={props.history} setRefresh={setRefresh}/>
            <DeleteWellModal history={props.history} setRefresh={setRefresh} showWellDel={showWellDel} setShowWellDel={setShowWellDel}/>
            <PlatImageModal well={props.well} setWell={props.setWell} showImage={showImage} setShowImage={setShowImage}/>
            <Diagram wellFeatures={wellFeatures} wellCements={wellCements} wellCasings={wellCasings} wellPerfs={wellPerfs} wellPlugs={wellPlugs} well={props.well} refresh={refresh}/>
        </div>
    );
};

export default withRouter(WellView)



/*

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