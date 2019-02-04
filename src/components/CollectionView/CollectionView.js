import React, { Component } from "react";
import firebase from "firebase";

class CollectionView extends Component {
  state = {
    result: null,
    collection: []
  };

  componentDidMount() {
    console.log(this.props.collection)
    // firebase
    //       .database()
    //       .ref("users/" + this.props.user.uid + "/collection")
    //       .once("value", function(snapshot){
    //         const value = snapshot.val();
    //         const cards = Object.entires(value || {}).map(([key, val]) => ({
    //           id: key,
    //           ...val
    //         }));
    //         this.setState({ collection: cards });
    //       });
  }

  render() {
    return (
      <div>
        <h1>Collection</h1>
        {this.state.collection.length === 0 ? (
          <p>Niema</p>
        ) : (
          this.state.collection.map(card => <li key={card.id}>{card.name}</li>)
        )}
      </div>
    );
  }
}

export default CollectionView;
