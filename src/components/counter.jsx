import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  handleIncrement = () => {
    this.state.count++;
    this.setState({});
  };

  render() {
    this.getCounterColor();

    return (
      <div>
        <span className={this.getCounterColor()}>{this.formatCounter()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.length > 0 ? (
            this.state.tags.map((tag) => <li key={tag}>{tag}</li>)
          ) : (
            <p>No Data</p>
          )}
        </ul>
      </div>
    );
  }

  formatCounter = () => (this.state.count === 0 ? "Zero" : this.state.count);

  getCounterColor() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
