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
                    <label htmlFor="emailR" className="emailLabelR">Email</label>
                    <input type="text" name="emailR" id="emailR" className="regInput"></input>
                    <label htmlFor="usernameR" className="usernameLabelR">Username</label>
                    <input type="text" name="usernameR" id="usernameR" className="regInput"></input>
                    <label htmlFor="passwordR" className="passwordLabelR">Password</label>
                    <input type="text" name="passwordR" id="passwordR" className="regInput"></input>
                    <input type="submit" className="submitR" id="submitR" value="Create Account"></input>
                </form>
            </div>
        </main>
    )
}

export default Registration