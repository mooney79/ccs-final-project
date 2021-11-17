import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function WellItem(props) {
    const id = props.id;
    const idString = `${id}`;
    const history = useHistory();

    const fetchWell = async () => {
      const response = await fetch(`/api/wells/${id}/`, 
      {headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
              }
      });
      if (!response.ok) {
          console.log('Error fetching well');
      } else {
          const data = await response.json();
          props.setWell(data);
          history.push(`/wellinfo/${id}`);
      }
    }

    function handleClick(event){
      // const wellID = event.target.parentElement.id;
      fetchWell();
    }

  return(
    <li className="ListItem" id={idString}>
        <div className="list-group-left"> <p className="list-p">{props.lease} {props.well_number}</p></div> <p className="li-center"><span className="bold-span">API:</span> {props.API_number} </p> <button onClick={handleClick}className="li-button">Select</button>
    </li>
  )
  }

export default WellItem;
