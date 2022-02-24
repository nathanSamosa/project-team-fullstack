import { useState } from "react";
import "../styling/form.css"

const URL = process.env.REACT_APP_API_URL;
const loginEndpoint = "/user/login"; 
const loginURL = URL + loginEndpoint;

console.log(loginURL);

const emptyDetails = {
    username: "",
    password: ""
}

const Login = () => {
    const [loginDetails, setLoginDetails] = useState(emptyDetails);

    const postLogin = (url, loginDetails) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setLoginDetails({
            ...loginDetails, [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        postLogin(loginURL, loginDetails);
        
    }

    return( 
        <main className="loginPage">
            <div id="loginFormDiv" className="userFormDiv">
                <h1>Login</h1>
                <form id="loginForm" className="userForm" onSubmit={handleSubmit}>
                    <label htmlFor="username" className="usernameLabel">
                        Username
                    </label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        className="regInput"
                        value={loginDetails.username}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password" className="passwordLabel">
                        Password
                    </label>
                    <input 
                        type="text" 
                        name="password" 
                        id="password" 
                        className="regInput"
                        value={loginDetails.password}
                        onChange={handleChange}
                    />
                    <button 
                        type="submit" 
                        className="submit" 
                        id="submit" 
                    >Login</button>
                    <label className="registerLabel">
                        Don't have an account?
                        <a className="registerLink" id="registerLink"> Register Here</a>
                    </label>
                    
                </form>
            </div>
        </main>
    )
}

export default Login