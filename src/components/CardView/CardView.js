import React, { Component } from "react";
// const cardNumber = this.props.match.params.cardId
const mtg = require("mtgsdk");

class CardView extends Component {
  state = {
    result: null
  };

  componentDidMount() {
    mtg.card.find(this.props.cardId).then(result => {
        this.setState({
            result
        })
    }
    );
  }

  render() {
    return (
        <div>
            {this.state.result === null ? <p>Niema</p> : (
                <div>
                <h1>{this.state.result.card.name}</h1>
                
                <img src={this.state.result.card.imageUrl} alt='nothing'/>

                <p>{this.state.result.card.text}</p>
              </div>  
            )}
        </div>
    )
  }
}

export default CardView;
