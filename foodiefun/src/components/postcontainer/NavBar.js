import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <div>
        <h1>FoodieFun!</h1>
      </div>
      <form onSubmit={props.searchSubmit}>
        <input
          type="text"
          placeholder="Search.."
          onChange={props.searchChange}
          value={props.searchInputText}
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
        <a
          onClick={props.handleSignOut}
        >
          Logout
        </a>
      </form>
    </div>
  );
};

export default NavBar;
