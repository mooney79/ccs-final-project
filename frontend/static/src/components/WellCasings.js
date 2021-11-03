function WellCasings(props){
    return(
        <div className="well-casing">
            <p>Casing Gauge: {props.gauge}</p>
            <p>Casing Weight: {props.casing_weight}</p>
            <p>Casing Grading: {props.casing_grading}</p>
            <p>Starting Depth: {props.starting_depth}</p>
            <p>Ending Depth: {props.ending_depth}</p>
            <hr></hr>
        </div>
    )
}

export default WellCasings;

/*

TO DO: TRANSLATE GAUGE BACK INTO SIZES

*/

