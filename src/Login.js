import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <form>
                <h1>Login</h1>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="text" name="password" placeholder="Password" />
                    <label htmlFor="password">Password</label>
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        );
    }
}

export default Login;