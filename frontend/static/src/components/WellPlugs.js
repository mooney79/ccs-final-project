function WellPlugs(props){
    return(
        <div className="well-plug">
        <p>Cement Type: {props.cement_type}</p>
        <p>Sacks Pumped: {props.sacks_pumped}</p>
        <p>Starting Depth: {props.starting_depth}</p>
        <p>Ending Depth: {props.ending_depth}</p>
        <hr></hr>
    </div>
    )
}

export default WellPlugs;