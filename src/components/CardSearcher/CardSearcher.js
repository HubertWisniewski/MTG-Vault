import React, { Component } from "react";
import CardSearcherForm from "../CardSearcherForm//CardSearcherForm";
import { Link } from "react-router-dom";

class CardSearcher extends Component {
  state = {
    results: [],
    date: Date.now()
  };

  componentUpdate = newDate => this.setState({ date: newDate });

  clearList = clear => this.setState({ results: clear });

  processSearchPhrase = (cardName, cardId) =>
    this.state.results.push({ name: cardName, id: cardId });

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
                <Link to={`/card/${result.id}`}> {result.name} </Link>{" "}
              </li>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default CardSearcher;
