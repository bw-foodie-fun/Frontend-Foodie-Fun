import React from "react";

const NavBar = props =>  {
    return (
      <div>
        <h3>FoodieFun</h3>
        <form onSubmit={props.searchSubmit}>
          <input
            type="text"
            placeholder="Search.."
            onChange={props.searchChange}
            value={props.searchInputText}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }


export default NavBar;
