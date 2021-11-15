import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function WellPlugs(props){
    const $faTrashAlt = <FontAwesomeIcon icon={faTrashAlt} inverse pull="right" className="highlight"/>
    function handleDelete(event){
        const $delTarget = event.currentTarget.parentElement.parentElement;
        let getClass = $delTarget.attributes.class.value;
        getClass = getClass.slice(5, getClass.length);
        let getID = $delTarget.children[1].id;
        props.setDeleteTarget({'id': getID, element: getClass});
        props.setIsClicked(true);
    }   
    let plugHTML;
    let plugChoiceHTML;  
    
    if(props.plug_type === 'CP') {
        plugHTML = <div className="well-plug">
            {plugChoiceHTML}
        <p>Sacks Pumped:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} onKeyPress={(e) => props.handlePlugKeyPress(e)} name="sacks_pumped" className="input-hidden" value={props.sacks_pumped} />
        <p>Starting Depth:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} onKeyPress={(e) => props.handlePlugKeyPress(e)} name="starting_depth" className="input-hidden" value={props.starting_depth} />
        <p>Ending Depth:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} onKeyPress={(e) => props.handlePlugKeyPress(e)} name="ending_depth" className="input-hidden" value={props.ending_depth} />
        <br />
        <p className="trash-icon"><span className="icon" onClick={handleDelete}>{$faTrashAlt}</span></p>
        <hr></hr>
        </div>
    } else if (props.plug_type === 'MP') {
        plugHTML = <div className="well-plug">
            {plugChoiceHTML}
        <p>Starting Depth:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} onKeyPress={(e) => props.handlePlugKeyPress(e)} name="starting_depth" className="input-hidden" value={props.starting_depth} />
        <p>Ending Depth:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} onKeyPress={(e) => props.handlePlugKeyPress(e)} name="ending_depth" className="input-hidden" value={props.ending_depth} />
        <br />
        <p className="trash-icon"><span className="icon" onClick={handleDelete}>{$faTrashAlt}</span></p>
        <hr></hr>
        </div>
    } else if (props.plug_type === 'DV') {
        plugHTML = <div className="well-plug">
            {plugChoiceHTML}
        <p>Set Depth:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} onKeyPress={(e) => props.handlePlugKeyPress(e)} name="set_depth" className="input-hidden" value={props.set_depth} />
        <br />
        <p className="trash-icon"><span className="icon" onClick={handleDelete}>{$faTrashAlt}</span></p>
        <hr></hr>
        </div>
    }

    return(
        <>
        <select id={props.id} onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} name="plug_type" className="input-hidden" defaultValue={props.plug_type} >
            <option value="CP" >Cement Plug</option>
            <option value="MP" >Mechanical Plug</option>
            <option value="DV" >Diverter Valve</option>
        </select>
        {plugHTML}
        </>
    )
}

export default WellPlugs;

//<p>Cement Type:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} name="cement_type" className="input-hidden" value={props.cement_type} />