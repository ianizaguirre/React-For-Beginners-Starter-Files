import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

import sampleFishes from '../sample-fishes';

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
    this.setState({
      fishes: sampleFishes
    });
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
