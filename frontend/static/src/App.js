import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'; //withRouter, 
import Cookies from 'js-cookie'
import Spinner from 'react-bootstrap/Spinner';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import './App.css';
import WelcomePage from './components/WelcomePage';
import WellView from './components/WellView';
import NewWellModal from './components/NewWellModal';
//FOR TESTING, BELOW
// import Diagram from './components/Diagram';
// import Test from './components/Test';
import SplashModal from './components/SplashModal';
import WellViewToo from './components/WellViewToo';



function App() {
  const [userName, setUserName] = useState('');
  const [isAuth, setIsAuth] = useState(null);
  const [userID, setUserID] = useState(null);
  const history = useHistory();
  const [well, setWell] = useState(null);
  const [showNew, setShowNew] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

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
        if (history.location.pathname !== '/register') {
          history.push('/login');
        }
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
  }, [isAuth, history]) //history, 

  if (isAuth === null){
    return <Spinner animation="grow" variant='primary' />
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/register' >
          <RegistrationForm isAuth={isAuth} setIsAuth={setIsAuth} history={history}/>
        </Route>
        <Route path='/login'>
            <LoginForm  isAuth={isAuth} setIsAuth={setIsAuth} history={history}/>
            <SplashModal userName={userName} setShowSplash={setShowSplash} showSplash={showSplash}/>
        </Route>       
        <Route path='/wellinfo/:id'>
            <WellViewToo well={well} setWell={setWell} userID={userID} setUserID={setUserID} history={history} setShowSplash={setShowSplash}/>
        </Route>

        {/* <Route path='/welltest/:id'>
            <WellViewToo well={well} setWell={setWell} userID={userID} setUserID={setUserID} history={history} setShowSplash={setShowSplash}/>
        </Route> */}
        

        {/* <Route path='/test'>
            <Test userName={userName} setShowSplash={setShowSplash} showSplash={showSplash}/>
        </Route>           */}

        {/* <Route path='/chart'>
            <Chart />
        </Route>           
        
        */}
       
        {/* <Route path='/wellslist'>
            <WellList isAuth={isAuth} history={history} well={well} setWell={setWell}/>
        </Route>        */}
        <Route path=''>
          <WelcomePage isAuth={isAuth} setIsAuth={setIsAuth} userID={userID} history={history} userName={userName} well={well} setWell={setWell} setShowNew={setShowNew} showNew={showNew}/>
          <SplashModal userName={userName} setShowSplash={setShowSplash} showSplash={showSplash}/>
          <NewWellModal setShowNew={setShowNew} showNew={showNew} history={history} userID={userID} setUserID={setUserID} setWell={setWell}/>
        </Route>        
      </Switch>
    </div>
  );
}

export default App;