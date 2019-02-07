import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Button, Popup, Segment } from "semantic-ui-react";
import '../CollectionView/CollectionView.css'
import "semantic-ui-css/semantic.min.css";

class CollectionView extends Component {
  render() {
    return (
      <div >
        <h1>Collection</h1>
        {this.props.collection.length === 0 ? (
          <></>
        ) : (
          <Segment inverted><p>{`Cards in your collection: ${this.props.collection.length}`}</p></Segment>
        )}
        {this.props.collection.length === 0 ? (
          <p>Niema</p>
        ) : (
          this.props.collection.map(card => (
            <div className='collection'>
              <ul style={{ listStyleType: "none" }}>
                <li key={card.id}>
                  <Link to={`/card/${card.id}`}>
                    <Popup
                      trigger={<Button>{card.name}</Button>}
                      content={<Image src={card.img} />}
                      
                      horizontalOffset={400}
                      position='center right'
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
