import React, { Component } from 'react';
import SignInForm from './SignInForm';
class Register extends Component {
    render() {
        return (
           <div className="row">
                 <div className="col-md-4 col-md-offset-4">
                 <SignInForm />
                 </div>
            </div>
                    

        );
        
}
}
export default Register;