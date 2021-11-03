function WellPlugs(props){
    return(
        <div className="well-plug">
        <p>Cement Type:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} name="cement_type" className="input-hidden" value={props.cement_type} />
        <p>Sacks Pumped:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} name="sacks_pumped" className="input-hidden" value={props.sacks_pumped} />
        <p>Starting Depth:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} name="starting_depth" className="input-hidden" value={props.starting_depth} />
        <p>Ending Depth:</p> <input id={props.id} type="text" onChange={props.handlePlugChange} onBlur={props.handlePlugBlur} name="ending_depth" className="input-hidden" value={props.ending_depth} />
        <hr></hr>
    </div>
    )
}

export default WellPlugs;