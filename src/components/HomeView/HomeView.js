import React, { Component } from 'react';


class HomeView extends Component {
    

  render() {  
    return (
      <div className="App">
       {this.props.user && <h1>{`Hello ${this.props.user.name}`}</h1>}
      </div>
    );
  }
}

export default HomeView;
