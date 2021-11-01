function WelcomePage(props){
    return (
        <div className="welcome-container">
            <h1> Welcome Page! </h1>
            <p> Blank(ish) Landing Page </p>
            <p> User ID: {props.userID} </p>
            <p className="text-center">Click <a href="/login">here</a> to Log in.</p>
        </div>
    )
}

export default WelcomePage