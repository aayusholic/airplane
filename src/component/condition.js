import React from "react";
import aayush from "../assets/2.jpeg";
import "../assets/css/condition.css";

class Aayush extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResume: false,
    };
  }

  toggleResume = () => {
    this.setState((prevState) => ({
      showResume: !prevState.showResume,
    }));
  };

  render() {
    const car = [
      {
        id: "1",
        company: "Volvo",
        price: 5000,
      },
      {
        id: "2",
        company: "BMW",
        price: 4000,
      },
      {
        id: "3",
        company: "Audi",
        price: 8000,
      },
      {
        id: "4",
        company: "Nissan",
        price: 9000,
      },
    ];

    return (
      <div className="list">
        <h1>This is conditional rendering.</h1>
        <button onClick={this.toggleResume}>
          {this.state.showResume ? "Hide Resume" : "Show Resume"}
        </button>

        {this.state.showResume && (
          <div>
            <img src={aayush} />
            {/* <a href="" target="_blank">
              Open My Resume
            </a> */}
          </div>
        )}
        {car.map((data) => {
          return (
            <div className="Card" key={data.id}>
              <p>{data.company}</p>
              <h1>{data.price}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Aayush;
