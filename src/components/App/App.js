import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from "react-router-dom";
import firebase from 'firebase'
import HomeView from '../HomeView/HomeView';
import CardsView from '../CardsView/CardsView';


class App extends Component {

  state = {
    user: null,
    cards: [],
    listOfKeys: null
  };

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref("users/" + user.uid)
          .once("value")
          .then(snapshot => {
            let fetchedUser = { uid: user.uid, ...(snapshot.val() || {})}
            this.setState({ user: fetchedUser});
            // console.log(this.state.user.name)
          });
      }
    });

//     const mtg = require('mtgsdk')

//     mtg.card.all({gameFormat: 'Standard', pageSize: 1})
// .on('data', card => {
//     this.state.cards.push(card)
// })

    fetch('https://crossorigin.me/https://api.magicthegathering.io/v1/cards', {gameFormat: 'Standard'})
        .then(response => response.json())
        .then(value => {
          // const cards = Object.entries(value || {}).map(([key, val]) => ({
          //    id: key,
          //   ...val
          // }));
          // const list = Object.keys(value || {}).map((key) => {
          //   return value[key]
          // })

          this.setState({
             cards: value  
            });
        });
      
        
    
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div className="App">
        <div className='Nav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cards">Cards</NavLink>
        </div>
        <Route exact path="/" component={() => <HomeView user={this.state.user}/>}/>
        <Route exact path="/cards" component={() => <CardsView list={this.state.listOfKeys} cards={this.state.cards} user={this.state.user}/>}/>

      </div>
    );
  }
}

export default withRouter(App);
