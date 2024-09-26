import React from "react";
import Sexy from "../assets/aboutus.png";

class Fresh extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      Image: "",
      Email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }
  handleChange(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  handleChangePassword(e) {
    this.setState({
      LastName: e.target.value,
    });
  }
  handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  handleChangeImage(e) {
    this.setState({
      Image: e.target.value,
    });
  }

  handleSubmit() {
    alert(this.state.firstName + this.state.lastName);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="Firstname"
        />
        <br />
        <input
          type="text"
          value={this.state.password}
          onChange={this.handleChangePassword}
          placeholder="Lastname"
        />
        <br />

        <input
          type="email"
          value={this.state.handleEmail}
          onChange={this.handleChangeEmail}
          placeholder="someone@gmail.com"
        />

        <br />

        <input
          type="image"
          value={this.state.handleImage}
          src={Sexy}
          onChange={this.handleChangeImage}
          placeholder="Place your Sexy Photo"
          width={20}
        />
        <button type="reset">Reset form</button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Fresh;
