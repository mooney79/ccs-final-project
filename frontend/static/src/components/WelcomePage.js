import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'
import WellList from './WellList';

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
            <h1 className="fp-h1 text-center"> Welcome back, {props.userName}! </h1>
            <WellList /> 
            {logHTML}            
        </div>
    )
}

export default WelcomePage

/*
<p className="fp-p"> Blank(ish) Landing Page </p>
{IDtestHTML}

*/