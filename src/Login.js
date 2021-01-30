import React from 'react';

class Login extends React.Component {
    render(){
        return (
            <form>
                <h1> Login! </h1>
                <div>
                    <label htmlFor='username'> Username: </label>
                    <input type="text" name="username" placeholder="Username" />
                    <label htmlFor="password"> Password: </label>
                    <input type="text" name="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" />
            </form>

        )
    }

}

export default Login