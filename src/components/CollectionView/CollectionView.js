import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Button, Popup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class CollectionView extends Component {
  render() {
    return (
      <div className='Collection'>
        <h1>Collection</h1>
        {this.props.collection.length === 0 ? (
          <></>
        ) : (
          <p>{`Cards in your collection: ${this.props.collection.length}`}</p>
        )}
        {this.props.collection.length === 0 ? (
          <p>Niema</p>
        ) : (
          this.props.collection.map(card => (
            <div>
              <ul style={{ listStyleType: "none" }}>
                <li key={card.id}>
                  <Link to={`/card/${card.id}`}>
                    <Popup
                      trigger={<Button>{card.name}</Button>}
                      content={<Image src={card.img} />}
                      
                      horizontalOffset={500}
                      position='bottom right'
                      basic
                    />
                  </Link>
                </li>
              </ul>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default CollectionView;
