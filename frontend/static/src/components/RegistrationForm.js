import { useState } from 'react'
import Cookies from 'js-cookie'

function RegistrationForm(props){
    const [userReg, setUserReg] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    })

    function handleInput(event) {
        const {name, value} = event.target;
        setUserReg(prevState => ({  
            ...prevState,        
            [name]:value,
        }))
    }

    const [error, setError] = useState(null);

    function handleError(err){
        console.warn(err);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if(userReg.password1 !== userReg.password2){
            setError('Passwords do not match!');
        } else {
            //fire off registration process
            const options = {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.get('csrftoken'),
                },
                body: JSON.stringify(userReg)
            };

            const response = await fetch('/rest-auth/registration/', options).catch(handleError);
            if(!response){
                console.log(response);
            } else {
                const data = await response.json();
                Cookies.set('Authorization', `Token ${data.key}`);
                props.setIsAuth(true);
            }
        }
    }


    return(
        <div className="form-container">
        <form className="mt-3 col-6 register-form" onSubmit={handleSubmit} >
            <div className="form-group text-left mb-3">
                <label htmlFor='username'>Username</label>
                <input type="text" 
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleInput}
                    required
                    name='username'
                    value={userReg.username}
                />
            </div>
            <div className="form-group text-left mb-3">
                <label htmlFor='email'>Email address</label>
                <input type="text" 
                    className="form-control"
                    id="email"
                    placeholder="Enter E-mail"
                    onChange={handleInput}
                    required
                    name='email'
                    value={userReg.email}
                />
            </div>
            <div className="form-group text-left mb-3">
                <label htmlFor='password1'>Password:</label>
                <input type="password" 
                    className="form-control"
                    id="password1"
                    placeholder="Enter Password"
                    onChange={handleInput}
                    required
                    name='password1'
                    value={userReg.password1}
                />
            </div>
            <div className="form-group text-left mb-3">
                <label htmlFor='password2'>Confirm Password:</label>
                <input type="password" 
                    className="form-control"
                    id="password2"
                    placeholder="Re-enter password"
                    onChange={handleInput}
                    required
                    name='password2'
                    value={userReg.password2}
                />
                {error &&<span className="text-danger"> {error}</span>}
            </div>
            <button type="submit" className="btn btn-primary mt-3" >Register</button>
        </form>
        </div>
    )

}

export default RegistrationForm