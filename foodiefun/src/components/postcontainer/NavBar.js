import React from "react";
import { Link, Redirect } from "react-router-dom";

class NavBar extends React.Component {

  handleSignOut = () => {
    localStorage.removeItem("token")
    window.location.reload();

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
        </form>
        </div>
<div>
        <Link
            to={{
              pathname: "/"
            }}
          >
            Home
          </Link>
          </div>
          <div>
          <Link
            to={{
              pathname: "/about"
            }}
          >
            About
          </Link>
          </div>
          <div>
          <Link
            to={{
              pathname: "/add"
            }}
          >
            Add Post
          </Link>
          </div>
          <div>
          <button
            onClick={this.handleSignOut}
          >
            Logout
          </button></div>
        </div>
      
    );
  } 
};

export default NavBar;
