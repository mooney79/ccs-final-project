function WellHoles(props){
    return(
        <div className="well-hole">
            <p>Hole Size: {props.hole_size}</p>
            <p>Starting Depth: {props.starting_depth}</p>
            <p>Ending Depth: {props.ending_depth}</p>
            <hr></hr>
        </div>
    )
}

export default WellHoles;


