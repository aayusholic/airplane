import { render } from "@testing-library/react";
import React from "react";

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  render() {
    return (
      <div>
        <h1>Clock</h1>

        <p>
          <b>The time is {this.state.date.toLocaleTimeString()}</b>
        </p>
        <p>
          <i>The date is {this.state.date.toLocaleDateString()}</i>
        </p>
      </div>
    );
  }
}
export default New;
