import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function WellPlugs(props){
    const $faTrashAlt = <FontAwesomeIcon icon={faTrashAlt} inverse pull="right" className="highlight"/>
    return(
        <div className="well-plug">
        <p>Cement Type:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} name="cement_type" className="input-hidden" value={props.cement_type} />
        <p>Sacks Pumped:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} name="sacks_pumped" className="input-hidden" value={props.sacks_pumped} />
        <p>Starting Depth:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} name="starting_depth" className="input-hidden" value={props.starting_depth} />
        <p>Ending Depth:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} name="ending_depth" className="input-hidden" value={props.ending_depth} />
        <p className="trash-icon"><span className="icon" onClick={()=>console.log('Trash it!')}>{$faTrashAlt}</span></p>
        <hr></hr>
    </div>
    )
}

export default WellPlugs;