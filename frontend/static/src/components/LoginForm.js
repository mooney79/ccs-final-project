import { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

function LoginForm(props){
    const [userLog, setUserLog] = useState({
        username: '',
        password: '',
    })

    function handleInput(event) {
        const {name, value} = event.target;
        setUserLog(prevState => ({   //prevState is a variable name for the previous
            ...prevState,         //value of the state
            [name]:value,
        }))
    }

    function handleError(err){
        console.warn(err);
    }
    
    async function handleSubmit(event) {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(userLog)
        };

        const response = await fetch('/rest-auth/login/', options).catch(handleError);
        if(!response){
            console.log(response);
        } else {
            const data = await response.json();
            Cookies.set('Authorization', `Token ${data.key}`); // This is bad mang.
            props.setIsAuth(true);
            // props.history.push('/profile');  // This pushes the browser to the next area
        }
    
    }
    if (props.isAuth){  //Example of a redirect, but kind of balls user-friendly-wise.  Instead, replace login button with logout button
        return <Redirect to="/" />
    } //Could flip it to protect "profileForm" and redirect them to login

    function directToRegister(){
        props.history.push('/register');
    }

    return(
        <div className="form-container">
        <form className="mt-3 col-6 login-form" onSubmit={handleSubmit} >
            <div className="form-group text-left mb-3">
                <label htmlFor='username'>Username</label>
                <input type="text" 
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleInput}
                    required
                    name='username'
                    value={userLog.username}
                />
            </div>
            <div className="form-group text-left mb-3">
                <label htmlFor='password'>Password:</label>
                <input type="password" 
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    onChange={handleInput}
                    required
                    name='password'
                    value={userLog.password1}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3" >Log in</button>            
            <p className="text-center">Not  a member?  Click <a href="" onClick={directToRegister}>here</a> to register.</p>
        </form>
        
        </div>
    )

}

export default withRouter(LoginForm)