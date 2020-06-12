import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCounter()}</span>
        <button>Button</button>
      </React.Fragment>
    );
  }

  formatCounter = () =>
    this.state.count === 0 ? <h1>Zero</h1> : this.state.count;
}

export default Counter;
