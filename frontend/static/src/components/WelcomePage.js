import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'
import WellList from './WellList';
import Chart from './Chart';

function WelcomePage(props){

    const handleLogout = async () => {
        const options = {
          method: 'POST',
          headers:{
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
          },
          body: JSON.stringify(props.user)
        };
    const response = await fetch('/rest-auth/logout/', options)
      if(!response){
          console.log(response);
      } else {
        Cookies.remove('Authorization');
        Cookies.remove('SessionID');
        props.setIsAuth(false);
      }
    };

    let logHTML;
    let IDtestHTML;
    if(props.isAuth){
        IDtestHTML = <p>User ID: {props.userID}</p>
        logHTML = <div className="welcome-page-log-button" onClick={handleLogout}>Logout</div>
    } else {
        IDtestHTML = <></>
        logHTML = <div className="welcome-page-log-button" onClick={() => props.history.push('/login')}>Login</div>
    }


    return (
        <div className="welcome-container">           
            <WellList setWell={props.setWell} well={props.well} setShowNew={props.setShowNew} showNew={props.showNew}/> 
            {logHTML}            
        </div>
    )
}

export default WelcomePage