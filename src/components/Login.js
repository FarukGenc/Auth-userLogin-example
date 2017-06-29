import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Geçersiz mail/şifre.'))
        })
  }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Şifrenizi yenilemek için mail gönderildi : ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email adresi bulunamadı.`)))
  }
  render () {
    return (
      <div className="container">
      <div className="col-sm-6 col-sm-offset-3">
        <h1 className="Align"> Giriş Yapın </h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>E-mail</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email adresinizi giriniz"/>
          </div>
          <div className="form-group">
            <label>Şifreniz</label>
            <input type="password" className="form-control" placeholder="Şifrenizi giriniz" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} <a onClick={this.resetPassword} className="alert-link">Şifrenizi mi unuttunuz?</a>
            </div>
          }
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
      </div>
    )
  }
}
