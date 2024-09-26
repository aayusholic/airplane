import React from "react";
import "../assets/css/clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
    };
    // this.touchMe = this.touchMe.bind(this);
  }

  touchMe() {
    this.setState({
      count: this.state.count + 1,
      // return()
    });
  }
  render() {
    return (
      <div className="touch">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <h3>You touched me {this.state.count} times.</h3>
        <button onClick={() => this.touchMe()}>Please TOUCH ME</button>
      </div>
    );
  }
}

export default Clock;
