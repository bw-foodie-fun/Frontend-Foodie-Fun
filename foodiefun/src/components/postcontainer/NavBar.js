import React from "react";
import { NavLink } from "react-router-dom";

import '../postcontainer/NavBar.css';

class NavBar extends React.Component {
  handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  render() {
    return (
      <div className="nav">
        <div className="nav-wrapper">
          <span className="foodie">
            <strong> FoodieFun</strong>
          </span>
          <div className="search">
            <form onSubmit={this.props.searchSubmit}>
              <input
                className="searchInput"
                type="text"
                placeholder="Search.."
                onChange={this.props.searchChange}
                value={this.props.searchInputText}
              />
              <button className="sub"><i className="fas fa-search"></i></button>
            </form>
          </div>

          <div className="links">
            <NavLink
              className="link"
              exact to={{
                pathname: "/"
              }}
            >
              <i className="fas fa-home"></i>
            </NavLink>

            <NavLink
              className="link"
              to={{
                pathname: "/add"
              }}
            >
              <i className="fas fa-plus"></i>
            </NavLink>

            <button className="logout" onClick={this.handleSignOut}>
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
