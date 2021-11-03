function WellHoles(props){

    return(
        <div className="well-hole">
            <p>Hole Size:</p> <input id={props.id} type="text" onChange={props.handleHoleChange} onBlur={props.handleHoleBlur} name="hole_size" className="input-hidden" value={props.hole_size} />
            <p>Starting Depth:</p> <input id={props.id} type="text" onChange={props.handleHoleChange} onBlur={props.handleHoleBlur} name="starting_depth" className="input-hidden" value={props.starting_depth} />
            <p>Ending Depth:</p> <input id={props.id} type="text" onChange={props.handleHoleChange} onBlur={props.handleHoleBlur} name="ending_depth" className="input-hidden" value={props.ending_depth} />
            <hr></hr>
        </div>
    )
}

export default WellHoles;
