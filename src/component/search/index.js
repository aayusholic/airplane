import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onInputChange(e.target.value);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.props.inputField}
          placeholder="Search Your Choice"
        />
      </form>
    );
  }
}

export default Search;
