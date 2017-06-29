import React, { Component } from 'react'
import { auth } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div className="container">
      <div className="col-sm-6 col-sm-offset-3">
        <h1 className="Align">Bize Katıl !</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Adınız</label>
            <input className="form-control" ref={(name) => this.name = name} placeholder="Adınızı giriniz"/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email adresinizi giriniz"/>
          </div>
          <div className="form-group">
            <label>Şifreniz</label>
            <input type="password" className="form-control" placeholder="Şifrenizi giriniz" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className="btn btn-primary">Kayıt ol</button>
        </form>
      </div>
      </div>
    )
  }
}
