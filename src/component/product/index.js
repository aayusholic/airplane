import React from "react";
import Cockpit from "../card";
import Search from "../search";

const data = [
  {
    id: "1",
    title: "Ironman",
    desc: "Randommmm",
  },

  {
    id: "2",
    title: "momo",
    desc: "1 hours ago",
  },
  {
    id: "3",
    title: "Crunchy chicken",
    desc: "5 min ago",
  },
];
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(data) {
    this.setState({ value: data });
  }
  render() {
    const filteredData = data.filter((item) => {
      if (item.title.toLowerCase().includes(this.state.value.toLowerCase())) {
        return item;
      }
    });
    return (
      <div>
        <Search
          inputField={this.state.value}
          onInputChange={this.handleChange}
        />
        <div>
          {filteredData.length > 0
            ? filteredData.map((item) => {
                return (
                  <Cockpit title={item.title} desc={item.desc} key={item.id} />
                );
              })
            : data.map((item) => {
                return (
                  <Cockpit title={item.title} desc={item.desc} key={item.id} />
                );
              })}
        </div>
      </div>
    );
  }
}
export default Product;
