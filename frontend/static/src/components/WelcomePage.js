import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'

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
            <h1 className="fp-h1"> Welcome Page! </h1>
            <p className="fp-p"> Blank(ish) Landing Page </p>
            {IDtestHTML}
            {logHTML}
            <NavLink to='/wellinfo'> Well Info Preview</NavLink> 
        </div>
    )
}

export default WelcomePage