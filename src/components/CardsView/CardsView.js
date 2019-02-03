import React, { Component } from "react";
import { dynamicSort } from '../../_utils'

class CardsView extends Component {
    // state = {
    //     cards: []
    // }


    componentDidMount() {
    //     const mtg = require('mtgsdk')

    //     mtg.card.all({gameFormat: 'Standard', pageSize: 1})
    // .on('data', card => {
    //     this.state.cards.push(card)
    // })
    console.log(this.props.cards)
    
    }

  render() {

    return (
      <div className="App">
        <h1>Medżiki</h1>
        <ul>
          {this.props.cards.length === 0 ? (<p>Niema</p>) : (this.props.cards.map(card => (
            <li key={card.id}>{card.name}</li>
          )))}
        </ul>
      </div>
    );
  }
}

export default CardsView;
