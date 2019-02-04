import React, { Component } from "react";
import firebase from 'firebase'


class CollectionView extends Component {
  state = {
    result: null,
    collection: []
  };

  componentDidMount() {
    firebase
    .database()
    .ref("users/" + this.state.user.uid + "/collection")
    .once("value")
    .then(snapshot => {
      const value = snapshot.val();
      const cards = Object.entires(value || {}).map(([key, val]) => ({
        id: key,
        ...val
      }));
      this.setState({ collection: cards });
    });
  }

  render() {
    return (
        <div>
            <h1>Collection</h1>
        </div>
    )
  }
}

export default CollectionView;
