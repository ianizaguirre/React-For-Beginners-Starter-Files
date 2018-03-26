import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  handleAddFish = fishObjectPassedIn => {
    const fishes = { ...this.state.fishes };

    fishes[`fish${Date.now()}`] = fishObjectPassedIn;

    this.setState({
      fishes: fishes
    });
  };

  loadSampleFishes = () => {
    alert('Loading Sample');
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFishProp={this.handleAddFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
