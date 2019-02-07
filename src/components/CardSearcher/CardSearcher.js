import React, { Component } from "react";
import CardSearcherForm from "../CardSearcherForm//CardSearcherForm";
import firebase from "firebase";
import { Icon, Pagination, Segment } from "semantic-ui-react";
import '../CardSearcher/CardSearcher.css'
import "semantic-ui-css/semantic.min.css";
import CardList from "../CardList/CardList";



const landFilter = (cardName) => {
switch (cardName) {
  case 'Mountain':
  return false
  case 'Island':
  return false
  case 'Plains':
  return false
  case 'Swamp':
  return false
  case 'Forest':
  return false
  default: 
  return true
}
}



class CardSearcher extends Component {
  state = {
    results: [],
    date: Date.now(),
    currentPage: 1,
    resultsPerPage: 25,
    isVisibleLeft: true,
    isVisibleRight: true,
  };

  handlePageChange(page) {
   
      this.setState({
        currentPage: Number(page.target.id)
      });
    
  }

  handlePageChangeOnArrowRight(page, number) {
    
      number.length !== page && this.setState({ currentPage: page + 1 });
      this.setState({ isVisableRight: !this.state.isVisableRight });
    
  }

  handlePageChangeOnArrowLeft(page, number) {
  
      number.length - number.length + 1 !== page &&
      this.setState({ currentPage: page - 1 });

    this.setState({ isVisibleLeft: !this.state.isVisibleLeft });
    
  }



  componentUpdate = newDate => this.setState({ date: newDate });

  clearList = clear => this.setState({ results: clear });
  
  processSearchPhrase = (cardName, cardId, setName, imgageUrl, cardColors) => {
    if (landFilter(cardName)) {
        this.state.results.push({
            name: cardName,
            id: cardId,
            set: setName,
            img: imgageUrl,
            colors: cardColors
          })
    }
  }

  
    
  addToCollection = result => {
    firebase
      .database()
      .ref("users/" + this.props.user.uid + "/collection")
      .push(result);
  };


  


  render() {
    const { results, currentPage, resultsPerPage } = this.state;

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);
  
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(results.length / resultsPerPage); i++) {
      pageNumbers.push(i);

    } 

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <span
          className={currentPage === number ? "active counter" : "counter"}
          key={number}
          id={number}
          onClick={this.handlePageChange}
        >
          {number}
        </span>
      );
    });


    return (
      <div className='card-searcher' >
      <Segment inverted >
        <CardSearcherForm
          clearList={this.clearList}
          results={this.state.results}
          componentUpdate={this.componentUpdate}
          processSearchPhrase={this.processSearchPhrase}
        />
        </Segment>
        <div className="results" key={this.state.date} style={{marginRight: 30}}>
        {this.state.results.length === 0 ? <></> : <p style={{marginTop: 20}}>{`We have found: ${this.state.results.length} results `}</p>}
          {this.state.results.length === 0 ? (
              <div style={{marginTop: 20}}>
            <p>No results</p>
            </div>
          ) : (           
            <div>
            <CardList results={currentResults}/>
         
        
        <Pagination
        style={{marginTop: 20}}
          activePage={this.state.currentPage}
          ellipsisItem={{
            content: <Icon name="ellipsis horizontal" />,
            icon: true
          }}
          onPageChange={(e, { activePage }) => this.setState({ currentPage: activePage })}
          firstItem={{ content: <Icon name="angle double left" />, icon: true }}
          lastItem={{ content: <Icon name="angle double right" />, icon: true }}
          prevItem={{ content: <Icon name="angle left" />, icon: true }}
          nextItem={{ content: <Icon name="angle right" />, icon: true }}
          totalPages={pageNumbers.length}
          inverted
        />
        </div>
        )}
      </div>
      </div>
    );
  }
}

export default CardSearcher;
