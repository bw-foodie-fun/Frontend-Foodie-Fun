import React from "react";

const NavBar = props =>  {
    return (
      <div>
        <h3>FoodieFun</h3>
        <form onSubmit={props.searchSubmit}>
        <button>Submit</button>
          <input
            type="text"
            placeholder="Search.."
            onChange={props.searchChange}
            value={props.searchInputText}
          />
        </form>
      </div>
    );
  }


export default NavBar;
