import React, { Component } from 'react';


class HomeView extends Component {
    

  render() {
    return (
      <div className="App">
       {this.props.user && <p>{`Siema ${this.props.user.name}`}</p>}
      </div>
    );
  }
}

export default HomeView;
