import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {

  handleSignOut = () => {
    localStorage.removeItem("token")
    this.props.history.push("/")
  }
  
  render() { 
    return (
      <div>
        <div>
          <h1>FoodieFun!</h1>
        </div>
        <form onSubmit={this.props.searchSubmit}>
          <input
            type="text"
            placeholder="Search.."
            onChange={this.props.searchChange}
            value={this.props.searchInputText}
          />
          <button>Submit</button>
          <Link
            to={{
              pathname: "/"
            }}
          >
            Home
          </Link>
          <Link
            to={{
              pathname: "/about"
            }}
          >
            About
          </Link>
          <Link
            to={{
              pathname: "/add"
            }}
          >
            Add Post
          </Link>
          <button
            onClick={this.handleSignOut}
          >
            Logout
          </button>
        </form>
      </div>
    );
  } 
};

export default NavBar;
