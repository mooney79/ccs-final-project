import './PDFView.css'
// import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';
import PDFDiagram from './PDFDiagram';

function PDFView(props){

    const [wellFeatures, setWellFeatures] = useState([]);
    const [wellHoles, setWellHoles] = useState([]);
    const [wellCasings, setWellCasings] = useState([]);
    const [wellCements, setWellCements] = useState([]);
    const [wellPerfs, setWellPerfs] = useState([]);
    const [wellPlugs, setWellPlugs] = useState([]);
    
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
        setTimeout(() => window.print(), 500);
    }, []);

    function formatDate() {
        const rawDate = props.well.updated_at;
        const year = rawDate.slice(0,4);
        const month = rawDate.slice(5,7);
        const day = rawDate.slice(9,10);
        return month + '/' + day + '/' + year;
    }

    let holeHTML=[];
    if (wellHoles){
        // console.log(props.wellHoles);
        for (let i = 0; i < wellHoles.length; i++) {
            holeHTML[i] = <div className="pdf-well-hole">
                <p>Hole Size: {wellHoles[i].hole_size}</p>
                <p>Starting Depth: {wellHoles[i].starting_depth}</p>
                <p>Ending Depth: {wellHoles[i].ending_depth}</p>
            </div>
        }
    }

    let casingHTML=[];
    if (wellCasings){
        for (let i = 0; i < wellCasings.length; i++) {
            let gaugeHTML;
            if (wellCasings[i].gauge === "xlg") {
                gaugeHTML = '13 3/8"'
            } else if (wellCasings[i].gauge === "lrg") {
                gaugeHTML = ' 9 5/8"'
            } else if (wellCasings[i].gauge === "med") {
                gaugeHTML = ' 8 5/8"'
            } else if (wellCasings[i].gauge === "reg") {
                gaugeHTML = ' 7"'
            } else if (wellCasings[i].gauge === "sml") {
                gaugeHTML = '5 1/2"'
            } else if (wellCasings[i].gauge === "xsm") {
                gaugeHTML = '4 1/2"'
            }
            casingHTML[i] = <div className="pdf-well-casing">
                <p>Casing Gauge: {gaugeHTML} </p>
                <p>Casing Weight: {wellCasings[i].casing_weight} </p>
                <p>Casing Grading: {wellCasings[i].casing_grading} </p>
                <p>Starting Depth: {wellCasings[i].starting_depth} </p>
                <p>Ending Depth: {wellCasings[i].ending_depth} </p>
            </div>
        }
    }

    let cementHTML = [];
    if (wellCements){
        for (let i=0; i < wellCements.length; i++) {
            cementHTML[i] = <div className="pdf-well-cement">
                <p>Cement Type: {wellCements[i].cement_type} </p>
                <p>Sacks Pumped: {wellCements[i].sacks_pumped}</p>
                <p>Top of Cement: {wellCements[i].starting_depth}</p>
                <p>Bottom of Cement: {wellCements[i].ending_depth}</p>
            </div>
        }
    }

    let perfsHTML = [];
    if (wellPerfs){
        for (let i=0; i < wellPerfs.length; i++) {
            perfsHTML[i] = <div className="pdf-well-perfs">
                <p>Perforation Interval: {wellPerfs[i].perforation_interval} </p>
                <p>Total Holes: {wellPerfs[i].perforation_total_holes}</p>
                <p>Starting Depth:{wellPerfs[i].starting_depth}</p>
                <p>Ending Depth: {wellPerfs[i].ending_depth}</p>
            </div>
        }
    }

    let plugsHTML = [];
    if (wellPlugs){
        for (let i=0; i < wellPlugs.length; i++) {
            if (wellPlugs[i].plug_type === "CP") {
                plugsHTML[i] = <div className="pdf-well-plug">
                    <p>Plug Type: Cement Plug</p>
                    <p>Sacks Pumped:{wellPlugs[i].sacks_pumped}</p> 
                    <p>Starting Depth:{wellPlugs[i].starting_depth}</p> 
                    <p>Ending Depth:{wellPlugs[i].ending_depth}</p> 
                </div>
            } else if (wellPlugs[i].plug_type === "MP") {
                plugsHTML[i] = <div className="pdf-well-plug">
                    <p>Plug Type: Mechanical Plug</p>
                    <p>Starting Depth:{wellPlugs[i].starting_depth}</p> 
                    <p>Ending Depth:{wellPlugs[i].ending_depth}</p> 
                </div>            
            } else if (wellPlugs[i].plug_type === "DV") {
                plugsHTML[i] = <div className="pdf-well-plug">
                <p>Plug Type: Diverter Valve</p>
                <p>Set Depth:{wellPlugs[i].set_depth}</p> 
            </div>
            } 
        }
    }

    window.onafterprint = (event) => {
        props.setShowPDF(false);
        props.setRefresh(Math.random()*733)
      };


    if (props.well && wellHoles && wellCasings && wellCements && wellPerfs && wellPlugs){
    return (
        <div className="PDF-body">
            <div className="top-row">
                <h2>{props.well.lease} {props.well.well_number}</h2>
                <div><span className="bold-span">API Number: </span>{props.well.API_number}</div>
                <div><span className="bold-span">Last Updated: </span>{formatDate()}</div>
            </div>
            <div className="main-block">
                <div className="text-block">
                    <div className="row-2">
                        <div><span className="bold-span">Company: </span>{props.well.company}</div>
                        <div><span className="bold-span">Permit Number: </span> {props.well.permit_number}</div>
                    </div>
                    <div>
                        <div><span className="bold-span">Current Status: </span>{props.well.current_status}</div>
                    </div>
                    <div className="row-3">
                        <div><span className="bold-span">Location: </span>{props.well.location}</div>
                        <div><span className="bold-span">Section: </span>{props.well.section}</div>
                        <div><span className="bold-span">Survey: </span>{props.well.survey}</div>
                    </div>
                    <div className="row-4">
                        <div><span className="bold-span">County: </span>{props.well.county} &nbsp; &nbsp;</div>
                        <div><span className="bold-span">State: </span> {props.well.state}</div>
                    </div>
                    <div className="row-5">
                        <div><span className="bold-span">Field: </span>{props.well.field}</div>
                        <div><span className="bold-span">Initial Formation: </span>{props.well.initial_formation}</div>
                    </div>
                    <div className="row-5">
                        <div><span className="bold-span">Spud Date: </span>{props.well.spud_date}</div>
                        <div><span className="bold-span">Comp Date: </span>{props.well.completion_date}</div>
                    </div>
                    <div className="row-6">
                        <div><span className="bold-span">Ground Level: </span>{props.well.ground_level}</div>
                        <div><span className="bold-span">Kelley Bushing: </span>{props.well.kelley_bushing}</div>
                    </div>
                    <div className="row-6">
                        <div><span className="bold-span">Derrick Floor: </span>{props.well.derrick_floor}</div>
                        <div><span className="bold-span">Total Depth: </span>{props.well.total_depth}</div>
                    </div>
                    <div className="features">
                        <h4> HOLE </h4>
                        {holeHTML}
                        <h4> CASING </h4>
                        {casingHTML}
                        <h4> CEMENT </h4>
                        {cementHTML}
                        <h4> PERFORATIONS </h4>
                        {perfsHTML}
                        <h4> PLUGS </h4>
                        {plugsHTML}
                    </div>
                </div>
                <PDFDiagram wellFeatures={wellFeatures} wellCements={wellCements} wellCasings={wellCasings} wellPerfs={wellPerfs} wellPlugs={wellPlugs} well={props.well} />
                {/* <img src="" alt="" className="static-diagram"></img> */}
            </div>
                
           
        </div>
    )
} else {
    return (
        <>
        </>
    )
}
}

export default withRouter(PDFView);