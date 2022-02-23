import { useState } from "react";


const emptyUser = {
    email: "",
    username: "",
    password: ""
}

const registerURL = "http://localhost:4000";

const Registration = () => {
    const [userDetails, setUserDetails] = useState(emptyUser);

    const postRegister = (url, userDetails) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setUserDetails({
            ...userDetails, [name]: value
        });
    }
    console.log(userDetails);
    
    const handleSubmit = e => {
        e.preventDefault();
        postRegister(registerURL, userDetails);
        
    }

    return( 
        <main className="registrationPage">
            <div id="registrationFormDiv">
                <div id="registrationSell">
                    <h2>Create your account</h2>
                    <ul>
                        <li>Rate your favourite Pokémon</li>
                        <li>Discuss your ratings</li>
                        <li>Pick your dream team</li>
                    </ul>
                </div>
                <form id="registrationForm" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="emailLabel">
                        Email
                    </label>
                    <input 
                        type="text" 
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
                    <input type="submit" className="submit" id="submit" value="Create Account"/>
                </form>
            </div>
        </main>
    )
}

export default Registration