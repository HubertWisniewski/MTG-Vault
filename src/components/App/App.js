import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import firebase from "firebase";
import HomeView from "../HomeView/HomeView";
import CardsView from "../CardsView/CardsView";
import CardView from "../CardView/CardView";
import CollectionView from "../CollectionView/CollectionView";


class App extends Component {
  state = {
    user: null,
    collection: []
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref("users/" + user.uid)
          .once("value")
          .then(snapshot => {
            let fetchedUser = { uid: user.uid, ...(snapshot.val() || {}) };
            this.setState({ user: fetchedUser }, () => {
              firebase
                .database()
                .ref("users/" + this.state.user.uid + "/collection")
                .once("value")
                .then(snapshot => {
                  const value = snapshot.val();
                  const collection = Object.entries(value || {}).map(
                    ([key, val]) => ({
                      id: key,
                      ...val
                    })
                  );
                  this.setState({ collection });
                });
            });
          });
      }
    });
    
  }

 
  render() {
    return (
      <div className="App">
        <div className="Nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cards">Cards</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <button onClick={() => firebase.auth().signOut()}>Logout</button>
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
          }) => <CardView cardId={cardId} />}
        />
        <Route
          exact
          path="/collection"
          component={() => (
            <CollectionView
              collection={this.state.collection}
              user={this.state.user}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
