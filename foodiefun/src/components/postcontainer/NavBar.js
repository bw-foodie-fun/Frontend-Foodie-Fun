import React from "react";
import { Link, Redirect } from "react-router-dom";

class NavBar extends React.Component {

  handleSignOut = () => {
    localStorage.removeItem("token")
    return <Redirect exact to="/"/>
  }
  
  render() { 
    return (
      <div className="nav">
        
          <div>FoodieFun!</div>
        
        <div><form onSubmit={this.props.searchSubmit}>
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
      </div>
    );
  } 
};

export default NavBar;
