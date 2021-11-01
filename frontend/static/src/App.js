import { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'
import Spinner from 'react-bootstrap/Spinner';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import './App.css';
import WelcomePage from './components/WelcomePage';
// import Underlay from './components/Underlay';

function App() {
  const [isAuth, setIsAuth] = useState(null);
  const [userID, setUserID] = useState(null);
  const history = useHistory();

  useEffect(()=> {
    const checkAuth = async () => {
      const response = await fetch('/rest-auth/user/', 
      {headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
            }
      });
      if (!response.ok) {
        setIsAuth(false);
        // history.push('/login'); // THIS LINE IS PUSHING FROM REGISTRATION BACK TO LOGIN.  DISABLE?
      } else {
        const data = await response.json();
        const ID=data.pk;
        setIsAuth(true);
        setUserID(ID);
        history.push('');
      }
    }
    checkAuth();
  }, [history, isAuth])

  if (isAuth === null){
    return <Spinner animation="grow" variant='primary' />
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/register' >
          <RegistrationForm isAuth={isAuth} setIsAuth={setIsAuth}/>
        </Route>
        <Route path='/login'>
            <LoginForm  isAuth={isAuth} setIsAuth={setIsAuth}/>
        </Route>       
        <Route path=''>
          <WelcomePage isAuth={isAuth} userID={userID}/>
        </Route>        
      </Switch>
    </div>
  );
}

export default App;