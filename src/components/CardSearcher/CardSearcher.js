import React, { Component } from "react";
import CardSearcherForm from "../CardSearcherForm//CardSearcherForm";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { Image, Button, Popup, Icon, Segment } from "semantic-ui-react";
import '../CardSearcher/CardSearcher.css'
import "semantic-ui-css/semantic.min.css";
import CardList from "../CardList/CardList";


const landFilter = (cardName) => {
switch (cardName) {
  case 'Mountain':
  return false
  case 'Island':
  return false
  case 'Plains':
  return false
  case 'Swamp':
  return false
  case 'Forest':
  return false
  default: 
  return true
}
}


class CardSearcher extends Component {
  state = {
    results: [],
    date: Date.now(),
    loadedElements: 50
  };

  componentUpdate = newDate => this.setState({ date: newDate });

  clearList = clear => this.setState({ results: clear });

  processSearchPhrase = (cardName, cardId, setName, imgageUrl) => {
    if (this.state.results.length <= this.state.loadedElements && landFilter(cardName)) {
        this.state.results.push({
            name: cardName,
            id: cardId,
            set: setName,
            img: imgageUrl,
          })
    }
  }

    
  addToCollection = result => {
    firebase
      .database()
      .ref("users/" + this.props.user.uid + "/collection")
      .push(result);
  };


  


  render() {
    return (
      <div className='CardSearcher' >
        <CardSearcherForm
          clearList={this.clearList}
          results={this.state.results}
          componentUpdate={this.componentUpdate}
          processSearchPhrase={this.processSearchPhrase}
        />
        <div className="results" key={this.state.date}>
        {this.state.results.length === 0 ? <></> : <p>{`We have found: ${this.state.results.length} results`}</p>}
          {this.state.results.length === 0 ? (
              <div style={{marginTop: 20}}>
            <p>No results</p>
            </div>
          ) : (           
            <CardList results={this.state.results}/>
          )}
        </div>
      </div>
    );
  }
}

export default CardSearcher;
