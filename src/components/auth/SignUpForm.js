import React, { Component } from 'react';
import { auth } from '../help/auth'
import './Authstyle.css';

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

class SignUpForm extends Component {
    state = { registerError: null }
    onSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <h3 className="Align">Bize Katıl !</h3>
            <hr />

            <div className="form-group">
                <label className="control-label">Adınızı giriniz</label>
                <input 
                onChange={this.onChange}
                value={this.state.username}
                type="text"
                name="username"
                className="form-control"/>
            </div>

            <div className="form-group">
                <label className="control-label">E-mail giriniz</label>
                <input 
                ref={(email) => this.email = email} 
                placeholder="Email"
                className="form-control"/>
            </div>

            <div className="form-group">
                <label className="control-label">Şifrenizi giriniz</label>
                <input 
                type="password"
                ref={(pw) => this.pw = pw}
                className="form-control"/>
            </div>
            {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Hata : </span>
              &nbsp;{this.state.registerError}
            </div>
            }      
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg">
                    Kayıt ol !
                </button>

            </div>

            </form>
        );
    }
}

export default SignUpForm;