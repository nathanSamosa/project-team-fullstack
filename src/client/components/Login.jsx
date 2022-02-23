import { useState } from "react";

const emptyDetails = {
    username: "",
    password: ""
}

const loginURL = "http://localhost:4000/user/login"; //need to update this URL when we try to run the fetch.

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
            <div id="loginFormDiv">
                <h1>Login</h1>
                <form id="loginForm" onSubmit={handleSubmit}>
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
                    <input 
                        type="submit" 
                        className="submit" 
                        id="submit" 
                        value="Login"
                    />
                    <label className="registerLabel">
                        Don't have an account?
                    </label>
                    <a className="registerLink" id="registerLink">Register Here</a>
                </form>
            </div>
        </main>
    )
}

export default Login