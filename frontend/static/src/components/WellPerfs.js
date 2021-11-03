function WellPerfs(props){
    return(
        <div className="well-perfs">
            <p>Perforation Interval: {props.perforation_interval}</p>
            <p>Total Holes: {props.perforation_total_holes}</p>
            <p>Starting Depth: {props.starting_depth}</p>
            <p>Ending Depth: {props.ending_depth}</p>
            <hr></hr>
        </div>
    )
}

export default WellPerfs;

/*


ending_depth: 8404
id: 1
perforation_interval: "15'"
perforation_total_holes: "250"
starting_depth: 8076
well: 1


*/