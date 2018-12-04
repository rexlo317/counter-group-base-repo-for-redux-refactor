import React, { Component } from "react";

class Counter extends Component {
  constructor(props){
    super(props)
  }
  increaseNumber = () => {
    this.props.onCounterValueChanged(1);
    this.props.onIncreased(1, this.props.id);
  };

  decreaseNumber = () => {
    this.props.onCounterValueChanged(-1);
    this.props.onDecreased(1, this.props.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.increaseNumber}>+</button>
        <span>{this.props.counterNum}</span>
        <button onClick={this.decreaseNumber}>-</button>
      </div>
    );
  }
}

export default Counter;
