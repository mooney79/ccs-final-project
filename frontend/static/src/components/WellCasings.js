function WellCasings(props){
    let gaugeSize;
    if (props.gauge === 'lrg'){
        gaugeSize = '13 3/8"';
    } else if (props.gauge === 'med'){
        gaugeSize = '9 5/8"';
    } else if (props.gauge === 'sml'){
        gaugeSize = '5 1/2"';
    }

    return(
        <div className="well-casing">
            <p>Casing Gauge: {gaugeSize}</p>
            <p>Casing Weight: {props.casing_weight}</p>
            <p>Casing Grading: {props.casing_grading}</p>
            <p>Starting Depth: {props.starting_depth}</p>
            <p>Ending Depth: {props.ending_depth}</p>
            <hr></hr>
        </div>
    )
}

export default WellCasings;