import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
function WellPerfs(props){
    const $faTrashAlt = <FontAwesomeIcon icon={faTrashAlt} inverse pull="right" className="highlight" />
    function handleDelete(event){
        const $delTarget = event.currentTarget.parentElement.parentElement;
        let getClass = $delTarget.attributes.class.value;
        getClass = getClass.slice(5, getClass.length);
        let getID = $delTarget.children[1].id;
        props.setDeleteTarget({'id': getID, element: getClass});
        props.setIsClicked(true);
    }   
    return(
        <div className="well-perfs">
            <p>Perforation Interval:</p> <input id={props.id} type="text" onChange={props.handlePerforationChange} onBlur={props.handlePerforationBlur} onKeyPress={(e) => props.handlePerfKeyPress(e)} name="perforation_interval" className="input-hidden" value={props.perforation_interval} />
            <p>Total Holes:</p> <input id={props.id} type="text" onChange={props.handlePerforationChange} onBlur={props.handlePerforationBlur} onKeyPress={(e) => props.handlePerfKeyPress(e)} name="perforation_total_holes" className="input-hidden" value={props.perforation_total_holes} />
            <p>Starting Depth:</p> <input id={props.id} type="text" onChange={props.handlePerforationChange} onBlur={props.handlePerforationBlur} onKeyPress={(e) => props.handlePerfKeyPress(e)} name="starting_depth" className="input-hidden" value={props.starting_depth} />
            <p>Ending Depth:</p> <input id={props.id} type="text" onChange={props.handlePerforationChange} onBlur={props.handlePerforationBlur} onKeyPress={(e) => props.handlePerfKeyPress(e)} name="ending_depth" className="input-hidden" value={props.ending_depth} />
            <br />
            <p className="trash-icon"><span className="icon" onClick={handleDelete}>{$faTrashAlt}</span></p>
            <hr></hr>
        </div>
    )
}

export default WellPerfs;

/*
<input id={props.id} type="text" onChange={props.handlePerforationChange} onBlur={props.handlePerforationBlur} name="starting_depth" className="input-hidden" value={props.starting_depth} />

ending_depth: 8404
id: 1
perforation_interval: "15'"
perforation_total_holes: "250"
starting_depth: 8076
well: 1


*/