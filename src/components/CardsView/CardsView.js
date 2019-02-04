import React, { Component } from "react";
import CardSearcher from "../CardSearcher/CardSearcher";



class CardsView extends Component {
  // state = {
  //     cards: []
  // }



  render() {
    return (
      <div className="App">
        <h1>Medżiki</h1>
        <ul>
          {/* {this.props.cards.length === 0 ? (<p>Niema</p>) : (this.props.cards.map(card => (
            <li key={card.id}>{card.name}</li>
          )))} */}
          <CardSearcher user={this.props.user}/>
        </ul>
      </div>
    );
  }
}

export default CardsView;
