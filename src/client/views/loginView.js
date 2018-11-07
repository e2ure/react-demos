import React, { Component } from 'react';
import {GoogleLogout,GoogleLogin} from 'react-google-login';
    
var config = require('../config/config.js');

const responseGoogle = (response) => {
    console.log(config)
    console.log(response)
}

const configHd = () => {
    console.log(config)
}

class Login extends Component {
  render() {
    return (
      <div>
      <GoogleLogin
            clientId={config.googleCredentias.web.client_id}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
        <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        >
        </GoogleLogout>
      </div>
    );
  }
}

export default Login;
