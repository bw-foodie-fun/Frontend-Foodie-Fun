import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Users from "../../users";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      users:
        JSON.parse(localStorage.getItem("users")) === null
          ? Users
          : JSON.parse(localStorage.getItem("users"))
    };
  }

  login = e => {
    e.preventDefault();
    if (
      this.state.users.filter(
        user =>
          user.username === this.state.username &&
          user.password === this.state.password
      ).length > 0
    ) {
      localStorage.setItem("user", JSON.stringify(this.state));
      this.props.login();
    } else {
      alert("Invalid Username and/or Password");
      this.setState({
        username: "",
        password: ""
      });
    }
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
              pathname: "/newlogin",
              state: { users: this.state.users }
            }}
          >
            New user?
          </Link>
        </div>
      </div>
    );
  }
}
