import React, { Component } from 'react';
import './Login.css';
var firebase = require('firebase');
var firebaseConfig = {
  apiKey: 'AIzaSyBU-tp4p5l5RTA5czIl-R-2glHBIaFYa-U',
  authDomain: 'usurvey-86679.firebaseapp.com',
  databaseURL: 'https://usurvey-86679.firebaseio.com',
  projectId: 'usurvey-86679',
  storageBucket: 'usurvey-86679.appspot.com',
  messagingSenderId: '472994884797',
  appId: '1:472994884797:web:7ac011497322ba06ee5bd4',
  measurementId: 'G-89QMCHRTYR',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class Login extends Component {
  login() {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    //firebase setup
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        var lout = document.getElementById('logout');
        lout.classList.remove('hide');
        this.setState({ err: 'Welcome back!' });
      })
      .catch((event) => {
        var err = event.message;
        // Handle Errors here.
        console.log(err);
        this.setState({
          err: err,
        });
        // ...
      });
  }
  signUp() {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    //firebase setup
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        var err = 'Hi thanks for signing up!';
        this.setState({ err: err });
      })
      .catch(function (error) {
        var err = error.message;
        // Handle Errors here.
        console.log(err);
        this.setState({
          err: err,
        });
        // ...
      });
    console.log('User created');
  }

  logOut() {
    firebase.auth().signOut();
    var lout = document.getElementById('logout');
    lout.classList.add('hide');
    this.setState({
      err: '',
    });
  }
  constructor(props) {
    super(props);

    this.state = {
      err: '',
    };
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type='email'
          id='email'
          ref='email'
          placeholder='Enter your email'
        />{' '}
        <br />
        <input
          type='password'
          id='pass'
          ref='password'
          placeholder='Enter your password'
        />
        <p>{this.state.err}</p>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.signUp}>Sign Up</button>
        <button id='logout' className='hide' onClick={this.logOut}>
          Log Out
        </button>
      </div>
    );
  }
}

export default Login;
