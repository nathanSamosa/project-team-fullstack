const Registration = () => {

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
                <form id="registrationForm">
                    <label htmlFor="email" className="emailLabel">Email</label>
                    <input type="text" name="email" id="email" className="regInput"></input>
                    <label htmlFor="username" className="usernameLabel">Username</label>
                    <input type="text" name="username" id="username" className="regInput"></input>
                    <label htmlFor="password" className="passwordLabel">Password</label>
                    <input type="text" name="password" id="password" className="regInput"></input>
                    <input type="submit" className="submit" id="submit" value="Create Account"></input>
                </form>
            </div>
        </main>
    )
}

export default Registration