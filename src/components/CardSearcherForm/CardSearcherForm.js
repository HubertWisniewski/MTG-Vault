import React, { Component } from 'react';

class CardSearcherForm extends Component {
    state = {
      cardName: '',
      error: null
    }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
          {this.state.error && <p>{this.state.error.message}</p>}
          <input
            focus
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
