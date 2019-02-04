import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import firebase from "firebase";
import HomeView from "../HomeView/HomeView";
import CardsView from "../CardsView/CardsView";
import CardView from "../CardView/CardView";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref("users/" + user.uid)
          .once("value")
          .then(snapshot => {
            let fetchedUser = { uid: user.uid, ...(snapshot.val() || {}) };
            this.setState({ user: fetchedUser });
          });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <div className="Nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cards">Cards</NavLink>
        </div>
        <Route
          exact
          path="/"
          component={() => <HomeView user={this.state.user} />}
        />
        <Route
          exact
          path="/cards"
          component={() => (
            <CardsView
              list={this.state.listOfKeys}
              cards={this.state.cards}
              user={this.state.user}
            />
          )}
        />
        <Route
          exact
          path="/card/:cardId"
          component={({
            match: {
              params: { cardId }
            }
          }) => <CardView cardId={cardId}/>}
        />
      </div>
    );
  }
}

export default withRouter(App);
