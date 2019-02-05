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
    loadedElements: 20
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentUpdate = newDate => this.setState({ date: newDate });

  clearList = clear => this.setState({ results: clear });

  processSearchPhrase = (cardName, cardId, setName, imgageUrl) => {
    if (this.state.results.length <= this.state.loadedElements) {
        this.state.results.push({
            name: cardName,
            id: cardId,
            set: setName,
            img: imgageUrl,
          })
    }
  }

    
  addToCollection = result => {
    firebase
      .database()
      .ref("users/" + this.props.user.uid + "/collection")
      .push(result);
  };


  onScroll = () => {
    // const {
    //   loadUsers,
    //   state: {
    //     error,
    //     isLoading,
    //     hasMore,
    //   },
    // } = this;

    // if (error || isLoading || !hasMore) return;

    if (
        (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) 
    ) {
      console.log('bejb')
    }
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
              <div style={{marginTop: 20}}>
            <p>No results</p>
            </div>
          ) : (           
            
            this.state.results.map(result => (
           
                <div>
                        
           
            <ul style={{listStyleType: 'none'}}>            
              <li key={result.id} style={{marginTop: 20}}>
              <Segment inverted>
                {" "}
               
                <Link to={`/card/${result.id}`}>
                  <Popup
                    trigger={<Button>{result.name}</Button>}
                    content={<Image src={result.img} alt='no image' />}
                    horizontalOffset={500}
                    position='bottom right'
                    basic
                    
                  />
                </Link>{" "}
                {result.set}

                
                <Button style={{marginLeft: 20}} basic color='red' animated onClick={() => this.addToCollection(result)}>
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
