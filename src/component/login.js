import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // internal state hunxa inputfiled hunxa
  // kei type garyeu vani vitrai internal state ma type gareko value baserako hunxa

  handleChange(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit() {
    alert(this.state.userName + this.state.password);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <h1>{this.state.userName}</h1> */}
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleChange}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChangePassword}
          placeholder="Password"
        />
        <br />

        <input
          type="text"
          value={this.state.password}
          onChange={this.handleChangePassword}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Login;
