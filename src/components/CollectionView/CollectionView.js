import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Button, Popup, Segment } from "semantic-ui-react";
import '../CollectionView/CollectionView.css'
import "semantic-ui-css/semantic.min.css";
import CollectionItem from "../CollectionItem/CollectionItem";

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
          <CollectionItem collection={this.props.collection}/>
        )}
      </div>
    );
  }
}

export default CollectionView;
