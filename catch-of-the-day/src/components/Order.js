import React, { Component } from 'react';

class Order extends Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        {orderIds}
      </div>
    );
  }
}

export default Order;
