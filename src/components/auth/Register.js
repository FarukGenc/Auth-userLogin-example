import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
class Login extends Component {
    render() {
        return (
           <div className="row">
                 <div className="col-md-4 col-md-offset-4">
                 <SignUpForm />
                 </div>
            </div>
                    

        );
        
}
}
export default Login;