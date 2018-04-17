import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

import base from '../base';

import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // Destructure this => ${this.props.match.params.storeId}
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: `fishes`
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  addToOrder = key => {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;

    this.setState({
      order: order
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />

          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} iterateDetails={this.state.fishes[key]} index={key} addToOrder={this.addToOrder} />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFishProp={this.handleAddFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
