import React, { Component } from "react";

export default class NewLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  newUser = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.handleSignUp(newUser);
    this.props.history.push("/");
  };

  // componentWillUnmount() {
  //     window.location.reload();
  // }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h1>Register:</h1>
          <form onSubmit={this.newUser}>
            <input
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChanges}
            />
            <input
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChanges}
              type="password"
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    );
  }
}
