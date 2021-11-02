import { useHistory } from "react-router-dom";

function WellItem(props) {
    const id = props.id;
    const idString = `${id}`;
    const history = useHistory();

    function handleClick(event){
        const wellID = event.target.parentElement.id;
        history.push('/wellinfo');
        /*
            use Router to push the wellID to the wellinfo page?
            <NavLink to='/wellinfo'> Well Info Preview</NavLink> ?
        */
        }

  return(
    <li className="ListItem" id={idString}>
        <p className="list-p">{props.lease} {props.well_number}</p> <p><span className="bold-span">API:</span> {props.API_number} </p> <button onClick={handleClick}className="li-button">Select</button>
    </li>
  )
  }

export default WellItem;
