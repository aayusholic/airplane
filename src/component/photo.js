import React from "react";

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { text } = this.state;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const letterCount = text.length;

    return (
      <div>
        <textarea
          placeholder="Type your text here..."
          onChange={this.handleTextChange}
          value={text}
          rows={5}
          cols={50}
        />
        <p>Word Count: {wordCount}</p>
        <p>Letter Count: {letterCount}</p>
      </div>
    );
  }
}

export default Photo;
