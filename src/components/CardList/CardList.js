import React, { Component } from "react";
import CardListItem from '../CardListItem/CardListItem'



class CardList extends Component{
    render() {
        return (
           <CardListItem results={this.props.results} addToCollection={this.props.addToCollection}/>
        )
    }
}

export default CardList;