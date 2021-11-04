import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function WellCasings(props){
    const $faTrashAlt = <FontAwesomeIcon icon={faTrashAlt} inverse pull="right" className="highlight"/>
    
    function handleDelete(event){
        const $delTarget = event.currentTarget.parentElement.parentElement;
        let getClass = $delTarget.attributes.class.value;
        getClass = getClass.slice(5, getClass.length);
        let getID = $delTarget.children[1].id;
        props.setDeleteTarget({'id': getID, element: getClass});
        props.setIsClicked(true);
    }   
    
    let gaugeSize;
    if (props.gauge === 'lrg'){
        gaugeSize = '13 3/8"';
    } else if (props.gauge === 'med'){
        gaugeSize = '9 5/8"';
    } else if (props.gauge === 'sml'){
        gaugeSize = '5 1/2"';
    }

    return(
        <div className="well-casing">
            <p>Casing Gauge:</p> <input id={props.id} type="text" onChange={props.handleCasingChange} onBlur={props.handleCasingBlur} name="gauge" className="input-hidden" value={gaugeSize} />
            <p>Casing Weight:</p> <input id={props.id} type="text" onChange={props.handleCasingChange} onBlur={props.handleCasingBlur} name="casing_weight" className="input-hidden" value={props.casing_weight} />
            <p>Casing Grading:</p> <input id={props.id} type="text" onChange={props.handleCasingChange} onBlur={props.handleCasingBlur} name="casing_grading" className="input-hidden" value={props.casing_grading} />
            <p>Starting Depth:</p> <input id={props.id} type="text" onChange={props.handleCasingChange} onBlur={props.handleCasingBlur} name="starting_depth" className="input-hidden" value={props.starting_depth} />
            <p>Ending Depth:</p> <input id={props.id} type="text" onChange={props.handleCasingChange} onBlur={props.handleCasingBlur} name="ending_depth" className="input-hidden" value={props.ending_depth} />
            <p className="trash-icon"><span className="icon" onClick={handleDelete}>{$faTrashAlt}</span></p>
            <hr></hr>
        </div>
    )
}

export default WellCasings;