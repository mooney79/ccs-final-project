import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function WellCements(props){
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
        <div className="well-cement">
        <p>Cement Type:</p> <input id={props.id} type="text" onChange={props.handleCementChange} onBlur={props.handleCementBlur} onKeyPress={(e) => props.handleCementKeyPress(e)} name="cement_type" className="input-hidden" value={props.cement_type} />
        <p>Sacks Pumped: </p><input id={props.id} type="text" onChange={props.handleCementChange} onBlur={props.handleCementBlur} onKeyPress={(e) => props.handleCementKeyPress(e)} name="sacks_pumped" className="input-hidden" value={props.sacks_pumped} />
        <p>Top of Cement: </p><input id={props.id} type="text" onChange={props.handleCementChange} onBlur={props.handleCementBlur} onKeyPress={(e) => props.handleCementKeyPress(e)} name="starting_depth" className="input-hidden" value={props.starting_depth} />
        <p>Bottom of Cement: </p><input id={props.id} type="text" onChange={props.handleCementChange} onBlur={props.handleCementBlur} onKeyPress={(e) => props.handleCementKeyPress(e)} name="ending_depth" className="input-hidden" value={props.ending_depth} />
        <br />
        <p className="trash-icon"><span className="icon" onClick={handleDelete}>{$faTrashAlt}</span></p>
        <hr></hr>
    </div>
    )
}

export default WellCements;