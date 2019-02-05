import React, { Component } from "react";
import CardSearcherForm from "../CardSearcherForm//CardSearcherForm";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { Image, Button, Popup, Icon, Segment } from "semantic-ui-react";
import '../CardSearcher/CardSearcher.css'
import "semantic-ui-css/semantic.min.css";



class CardSearcher extends Component {
  state = {
    results: [],
    date: Date.now(),
  };

  componentUpdate = newDate => this.setState({ date: newDate });

  clearList = clear => this.setState({ results: clear });

  processSearchPhrase = (cardName, cardId, setName, imgageUrl) => {
    this.state.results.push({
        name: cardName,
        id: cardId,
        set: setName,
        img: imgageUrl,
      })
  }

    
  addToCollection = result => {
    firebase
      .database()
      .ref("users/" + this.props.user.uid + "/collection")
      .push(result);
  };

  render() {
    return (
      <div className='CardSearcher' >
        <CardSearcherForm
          clearList={this.clearList}
          results={this.state.results}
          componentUpdate={this.componentUpdate}
          processSearchPhrase={this.processSearchPhrase}
        />
        <div className="results" key={this.state.date}>
        {this.state.results.length === 0 ? <></> : <p>{`We have found: ${this.state.results.length} results`}</p>}
          {this.state.results.length === 0 ? (
              <div>
            <p>Niema</p>
            </div>
          ) : (           
            this.state.results.map(result => (
                <div>
           
            <ul style={{listStyleType: 'none'}}>            
              <li key={result.id} style={{marginTop: 20}}>
              <Segment style={{margin: 0 + 'auto'}}>
                {" "}
               
                <Link to={`/card/${result.id}`}>
                  <Popup
                    trigger={<Button>{result.name}</Button>}
                    content={<Image src={result.img} alt='no image' />}
                    
                    position='left center'
                    basic
                    
                  />
                </Link>{" "}
                {result.set}

                
                <Button style={{marginLeft: 20}} basic color='black' animated onClick={() => this.addToCollection(result)}>
                <Button.Content visible>Add to collection</Button.Content>
                <Button.Content hidden><Icon name='arrow right' /></Button.Content>
                 
                </Button>
                </Segment>
              </li>
              </ul>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default CardSearcher;
