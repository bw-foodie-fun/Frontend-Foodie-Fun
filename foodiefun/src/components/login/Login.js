import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  login = e => {
    e.preventDefault();
    this.props.handleSignIn(this.state)
    // this.props.login();
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Log In:</h1>
          <form onSubmit={this.login} className="login">
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
            <button>Login</button>
          </form>
          <Link
            to={{
              pathname: "/newlogin"
            }}
          >
            New user?
          </Link>
        </div>
      </div>
    );
  }
}
