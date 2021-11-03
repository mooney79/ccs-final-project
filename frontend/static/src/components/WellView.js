// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import WellHoles from './WellHoles';
import WellCasings from './WellCasings';
import WellCements from './WellCements';
import WellPerfs from './WellPerfs';
import WellPlugs from './WellPlugs';
import Spinner from 'react-bootstrap/esm/Spinner';


function WellView(props) {
    
    const $faImage = <FontAwesomeIcon icon={faImage} size="2x" />
    const [wellFeatures, setWellFeatures] = useState([]);
    const [wellHoles, setWellHoles] = useState([]);
    const [wellCasings, setWellCasings] = useState([]);
    const [wellCements, setWellCements] = useState([]);
    const [wellPerfs, setWellPerfs] = useState([]);
    const [wellPlugs, setWellPlugs] = useState([]);
    let wellHolesHTML;
    let wellCasingsHTML;
    let wellCementsHTML;
    let wellPerfsHTML;
    let wellPlugsHTML;
    
    function displayPopup() {
        const $popup = document.getElementById('popup');
        if ($popup.style.display === 'none'){
            $popup.style.display = 'block';
        } else {
            $popup.style.display = 'none';
        }
    }

    function formatDate() {
        const rawDate = props.well.updated_at;
        const year = rawDate.slice(0,4);
        const month = rawDate.slice(5,7);
        const day = rawDate.slice(9,10);
        return month + '/' + day + '/' + year;
    }

    useEffect(() => {
        const fetchWellFeatures = async () => {
            const response = await fetch(`/api/wells/${props.well.id}/features`, 
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
        fetchWellFeatures();
    }, [props.well]);


    
    if (wellHoles !== []){
        wellHolesHTML = wellHoles.map(hole => <WellHoles key={hole.id+1000} {...hole} />)
    } else {
        wellHolesHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    if (wellCasings !== []){
        wellCasingsHTML = wellCasings.map(casing => <WellCasings key={casing.id+2000} {...casing} />)
    } else {
        wellCasingsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    if (wellCements !== []){
        wellCementsHTML = wellCements.map(cement => <WellCements key={cement.id+3000} {...cement} />)
    } else {
        wellCementsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    if (wellPerfs !== []){
        wellPerfsHTML = wellPerfs.map(perf => <WellPerfs key={perf.id+4000} {...perf} />)
    } else {
        wellPerfsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    if (wellPlugs !== []){
        wellPlugsHTML = wellPlugs.map(plug => <WellPlugs key={plug.id+5000} {...plug} />)
    } else {
        wellPlugsHTML = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }


    let wellInfoHTML;
    if (props.well !== null) {
        wellInfoHTML = 
        <div className="well-info">
                <div className="well-table-top row">
                    <div className="col-lg-8"> 
                        <h2>{props.well.lease} {props.well.well_number} <span className="icon" onClick={displayPopup}>{$faImage}</span></h2>
                    </div>
                    <div id="popup" className="plat-pop-up"> I'm a PLAT!</div>
                    <div className="col-lg-4 text-right">
                        <span className="bold-span">Last Updated: </span>{formatDate()}
                    </div>                    
                </div>
                <div className="well-table-id row">
                    <div className="col-lg-3">
                        <span className="bold-span">API Number: </span>{props.well.API_number}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Company: </span>{props.well.company}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Permit Number: </span>{props.well.permit_number}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Current Status: </span>{props.well.current_status}
                    </div>
                </div>
                <div className="well-table-location row">
                    <div className="col-lg-3">
                        <span className="bold-span">Location: </span>{props.well.location}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Section: </span>{props.well.section}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Survey: </span>{props.well.survey}
                    </div>
                    <div className="col-lg-3">
                        <p><span className="bold-span">County: </span>{props.well.county}
                        &nbsp; &nbsp; <span className="bold-span">State: </span>{props.well.state}</p>
                    </div>
                </div>
                <div className="well-table-field row">
                    <div className="col-lg-3">
                        <span className="bold-span">Field: </span>{props.well.field}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Initial Formation: </span>{props.well.initial_formation}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Spud Date: </span>{props.well.spud_date}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Comp Date: </span>{props.well.completion_date}
                    </div>
                </div>
                <div className="well-table-depths row mb-3">
                    <div className="col-lg-3">
                        <span className="bold-span">Ground Level: </span>{props.well.ground_level}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Kelley Bushing: </span>{props.well.kelley_bushing}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Derrick Floor: </span>{props.well.derrick_floor}
                    </div>
                    <div className="col-lg-3">
                        <span className="bold-span">Total Depth: </span>{props.well.total_depth}
                    </div>
                </div>
                <div className="labels row">
                    <div className="hole-col col">
                        <div className="showme">
                            <p className="label1"> HOLE</p>
                        </div>
                        <div className="scroll-area">
                            {wellHolesHTML}
                        </div>
                    </div>
                    <div className="casing-col col">
                        <div className="showme">
                            <p className="label2">CASING</p>
                        </div>
                        <div className="scroll-area">
                            {wellCasingsHTML}
                        </div>
                    </div>
                    <div className="cement-col col">
                        <div className="showme" >
                            <p className="label3">CEMENT</p>
                        </div>
                        <div className="scroll-area">
                            {wellCementsHTML}
                        </div>
                    </div>
                    <div className="perf-col col">
                        <div className="showme">
                            <p className="label4">PERFORATIONS</p>
                        </div>
                        <div className="scroll-area">
                            {wellPerfsHTML}
                        </div>
                    </div>
                    <div className="plug-col col">
                        <div className="col showme">
                            <p className="label5">PLUGS</p>
                        </div>
                        <div className="scroll-area">
                            {wellPlugsHTML}
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
            <div className="canvas-frame">
                <canvas id="canvas" width="25vw" height="90vh"></canvas>
            </div>
        </div>
    );
};

export default WellView



/*

<div className="well-info">
                <h2>{props.well.lease} {props.well.well_number}</h2>
                <button onClick={displayPopup}>  {$faImage} <br /> Plat Button </button>  
                <div id="popup" className="plat-pop-up"> I'm a PLAT!</div>
                I'm a well! 
            </div>







*/