const Login = () => {

    return( 
        <main className="loginPage">
            <div id="loginFormDiv">
                <h1>Login</h1>
                <form id="loginForm">
                    <label htmlFor="username" className="usernameLabel">Username</label>
                    <input type="text" name="username" id="username" className="regInput"></input>
                    <label htmlFor="password" className="passwordLabel">Password</label>
                    <input type="text" name="password" id="password" className="regInput"></input>
                    <input type="submit" className="submit" id="submit" value="Login"></input>
                    <label className="registerLabel">Don't have an account?</label>
                    <a className="registerLink" id="registerLink">Register Here</a>
                </form>
            </div>
        </main>
    )
}

export default Login