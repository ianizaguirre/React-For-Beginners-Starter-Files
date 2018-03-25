import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  handleAddFish = whatever => {
    //const fishes = { ...this.state.fishes };
    console.log('Adding A Fish');
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFishProp={this.handleAddFish} />
      </div>
    );
  }
}

export default App;
