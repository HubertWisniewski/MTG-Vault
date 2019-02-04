import React, { Component } from "react";
import { Link } from 'react-router-dom'

class CollectionView extends Component {
  render() {
    return (
      <div>
        <h1>Collection</h1>
        {this.props.collection.length === 0 ? (
          <p></p>
        ) : (
          <p>{`Cards in your collection: ${this.props.collection.length}`}</p>
        )}
        {this.props.collection.length === 0 ? (
          <p>Niema</p>
        ) : (
          this.props.collection.map(card => (
            <div>
              <ul>
              <Link to={`/card/${card.id}`}><li key={card.id}>{card.name}</li></Link>
              </ul>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default CollectionView;
