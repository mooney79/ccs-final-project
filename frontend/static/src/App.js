import { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'
import Spinner from 'react-bootstrap/Spinner';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import './App.css';
import WelcomePage from './components/WelcomePage';
import WellView from './components/WellView';
import NewWellModal from './components/NewWellModal';
//FOR TESTING, BELOW
import Diagram from './components/Diagram';


function App() {
  const [userName, setUserName] = useState('');
  const [isAuth, setIsAuth] = useState(null);
  const [userID, setUserID] = useState(null);
  const history = useHistory();
  const [well, setWell] = useState(null);
  const [showNew, setShowNew] = useState(false);

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
        history.push('/login'); // THIS LINE IS PUSHING FROM REGISTRATION BACK TO LOGIN.  DISABLE?
      } else {
        const data = await response.json();
        const ID=data.pk;
        const username=data.username;
        setIsAuth(true);
        setUserID(ID);
        setUserName(username);
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
        <Route path='/wellinfo/:id'>
            <WellView well={well} setWell={setWell}/>
        </Route>
        <Route path='/diagram'>
            <Diagram />
        </Route>              
        {/* <Route path='/wellslist'>
            <WellList isAuth={isAuth} history={history} well={well} setWell={setWell}/>
        </Route>        */}
        <Route path=''>
          <WelcomePage isAuth={isAuth} setIsAuth={setIsAuth} userID={userID} history={history} userName={userName} well={well} setWell={setWell} setShowNew={setShowNew} showNew={showNew}/>
          <NewWellModal setShowNew={setShowNew} showNew={showNew} history={history} userID={userID} setUserID={setUserID} setWell={setWell}/>
        </Route>        
      </Switch>
    </div>
  );
}

export default App;