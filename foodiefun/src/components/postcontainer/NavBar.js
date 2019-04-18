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
         <span className="foodie"><strong> FoodieFun</strong></span>
        <div className="search">
        <form onSubmit={this.props.searchSubmit}>
          <input className="searchInput"
            type="text"
            placeholder="Search.."
            onChange={this.props.searchChange}
            value={this.props.searchInputText}
          />
          <button className="sub">Submit</button>
        </form>
        </div>
        <div className="links">
        <Link
            className="link"
            to={{
              pathname: "/"
            }}
          >
            Home
          </Link>
          
          
          <Link
          className="link"
            to={{
              pathname: "/about"
            }}
          >
            About
          </Link>
          
          
          <Link
          className="link"
            to={{
              pathname: "/add"
            }}
          >
            Add
          </Link>
          
          
          <button className="logout"
            onClick={this.handleSignOut}
          >
            Logout
          </button>
          </div></div>
          
      
    );
  } 
};

export default NavBar;
