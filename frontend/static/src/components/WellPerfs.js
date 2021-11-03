function WellPerfs(props){
    return(
        <div className="well-perfs">
            <p>Perforation Interval:</p> <input id={props.id} type="text" onChange={props.handlePerforationChange} onBlur={props.handlePerforationBlur} name="perforation_interval" className="input-hidden" value={props.perforation_interval} />
            <p>Total Holes:</p> <input id={props.id} type="text" onChange={props.handlePerforationChange} onBlur={props.handlePerforationBlur} name="perforation_total_holes" className="input-hidden" value={props.perforation_total_holes} />
            <p>Starting Depth:</p> <input id={props.id} type="text" onChange={props.handlePerforationChange} onBlur={props.handlePerforationBlur} name="starting_depth" className="input-hidden" value={props.starting_depth} />
            <p>Ending Depth:</p> <input id={props.id} type="text" onChange={props.handlePerforationChange} onBlur={props.handlePerforationBlur} name="ending_depth" className="input-hidden" value={props.ending_depth} />
            <hr></hr>
        </div>
    )
}

export default WellPerfs;

/*
<input id={props.id} type="text" onChange={props.handlePerforationChange} onBlur={props.handlePerforationBlur} name="starting_depth" className="input-hidden" value={props.starting_depth} />

ending_depth: 8404
id: 1
perforation_interval: "15'"
perforation_total_holes: "250"
starting_depth: 8076
well: 1


*/