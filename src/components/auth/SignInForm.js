import React, { Component } from 'react';
import { login, resetPassword } from '../help/auth';
import './Authstyle.css';

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class SignInForm extends Component {
    state = { loginMessage: null }
    onSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Geçersiz mail/şifre'))
        })
                }
    resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Mail gönderildi ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Lütfen doğru mail adresi giriniz.`)))
                }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3 className="Align">Giriş Yap </h3>
                <hr />
            <div className="form-group">
                <label className="control-label">E-mail giriniz</label>
                <input 
                onChange={this.onChange}
                ref={(email) => this.email = email} 
                placeholder="Email"
                className="form-control"/>
            </div>

            <div className="form-group">
                <label className="control-label">Şifrenizi giriniz</label>
                <input 
                type="password"
                placeholder="Password" 
                ref={(pw) => this.pw = pw}
                className="form-control"/>
            </div>

            {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Hata : </span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Şifrenizi mi unuttunuz ?</a>
            </div>
          }

            <div className="form-group">
                <button 
                type="submit"
                className="btn btn-primary btn-lg">
                Giriş
                </button>

            </div>

            </form>
        );
    }
}

export default SignInForm;