import React, { Component } from 'react';
import SignUpForm from '../SignUpForm/SignUpForm'
import firebase from 'firebase'

class Auth extends Component {
    state = {
        user: {}
      };
    
      componentDidMount() {
        this.unsubscribe = firebase
          .auth()
          .onAuthStateChanged(user => this.setState({ user }));
      }
    
      componentWillUnmount() {
        this.unsubscribe();
      }

  render() {
    return this.state.user === null ? (
      <div className="App">
        <h1>Siema mordo</h1>
        <SignUpForm/>
        </div>
    ) : (
        this.props.children
    )
  }
}

export default Auth;
