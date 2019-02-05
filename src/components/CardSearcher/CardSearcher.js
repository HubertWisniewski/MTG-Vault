import React, { Component } from "react";
import CardSearcherForm from "../CardSearcherForm//CardSearcherForm";
import { Link } from "react-router-dom";
import firebase from 'firebase'
import { Popup } from 'semantic-ui-react'

class CardSearcher extends Component {
  state = {
    results: [],
    date: Date.now()
  };

  componentUpdate = newDate => this.setState({ date: newDate });

  clearList = clear => this.setState({ results: clear });

  processSearchPhrase = (cardName, cardId, setName, imgUrl) =>
    this.state.results.push({ name: cardName, id: cardId, set: setName, img: imgUrl });

  addToCollection = result => {
    firebase.database().ref('users/' + this.props.user.uid + '/collection').push(result)
    
  }

  render() {
    return (
      <div>
        <CardSearcherForm
          clearList={this.clearList}
          componentUpdate={this.componentUpdate}
          processSearchPhrase={this.processSearchPhrase}
        />
        <div className="results" key={this.state.date}>
          {this.state.results.length === 0 ? (
            <p>Niema</p>
          ) : (
            this.state.results.map(result => (
              <li key={result.id}>
                {" "}
                <Link to={`/card/${result.id}`}>

                 {result.name} 
                 
                 </Link>{" "}
                {result.set}
            <button onClick={() => this.addToCollection(result)}>Add</button>
              </li>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default CardSearcher;
