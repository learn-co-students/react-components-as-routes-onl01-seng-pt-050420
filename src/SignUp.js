import React from 'react';

class SignUp extends React.Component {

    render() {

        return (
            <div>
              <form>
                <div>
                  <input type="text" name="username" placeholder="Username" />
                  <label htmlFor="username">Username</label>
                </div>
                <div>
                  <input type="text" name="password" placeholder="Password" />
                  <label htmlFor="password">Password</label>
                </div>
                <div>
                  <input type="submit" value="signup" />
                </div>
              </form>
            </div>
          );
    }
    
}

export default SignUp;
