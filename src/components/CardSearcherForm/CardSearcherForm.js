import React, { Component } from 'react';

const mtg = require('mtgsdk')

class CardSearcherForm extends Component {
    state = {
      cardName: '',
      error: null
    }

    handleSubmit = event => {
      event.preventDefault();
      if (this.state.cardName === "") {
        this.setState({
          error: new Error("What card do you want to find?")
        });
        return;
      }
      // this.props.processSearchPhrase(this.state.cardName);
      mtg.card.all({ name: this.state.cardName, gameFormat: 'Standard' })
    .on('data', card => {
    this.props.processSearchPhrase(card.name, card.id, card.setName, card.imgUrl)
    this.props.componentUpdate(Date.now())
    })
      this.props.clearList([])
      this.setState({ cardName: "", error: null });
    };

    handleChange = event => {
      this.setState(
        {
          cardName: event.target.value
        }
      );
    };

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
          {this.state.error && <p>{this.state.error.message}</p>}
          <input
            placeholder="Znajdź kartę"
            value={this.state.cardName}
            onChange={this.handleChange}
          />
        </form>
        </div>
    )
  }
}

export default CardSearcherForm;
