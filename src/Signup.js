import React from 'react';

class Signup extends React.Component{
    render(){
        return(
            <form>
                <div>
                    <input type="text" name="username"/>
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="text" name="password"/>
                    <label htmlFor="password">Password</label>
                </div>
            </form>
        )
    }
}
export default Signup