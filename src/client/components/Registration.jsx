import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_API_URL;
const registerEndpoint = "/user/register";
const registerURL = URL + registerEndpoint;


const emptyUser = {
    email: "",
    username: "",
    password: ""
}

const Registration = () => {
    const [userDetails, setUserDetails] = useState(emptyUser);
    const navigate = useNavigate();

    const postRegister = async (url, userDetails) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
        })
        const data = await res.json();
        console.log({ FetchData: data });
        return data;
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setUserDetails({
            ...userDetails, [name]: value
        });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const resData = await postRegister(registerURL, userDetails);
        if (resData) {
            navigate("/home");
        }
        
    }

    return ( 
        <main className="registrationPage">
            <div id="registrationFormDiv" className="userFormDiv">
                <div id="registrationSell">
                    <h2>Create your account</h2>
                    <ul>
                        <li>Rate your favourite Pokémon</li>
                        <li>Discuss your ratings</li>
                        <li>Pick your dream team</li>
                    </ul>
                </div>
                <form id="registrationForm" className="userForm" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="emailLabel">
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="regInput" 
                        value={userDetails.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="username" className="usernameLabel">
                        Username
                    </label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        className="regInput"
                        value={userDetails.username}
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
                        value={userDetails.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="submit" id="submit">Create Account</button>
                </form>
            </div>
        </main>
    )
}

export default Registration