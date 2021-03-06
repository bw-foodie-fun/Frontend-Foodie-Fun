import React from "react";
import RestaurantList from "./RestaurantList";
import NavBar from "./NavBar";

const PostPage = props => {
  return (
    <div>
      <NavBar
        {...props}
        searchInputText={props.searchInputText}
        searchChange={props.searchChange}
        searchSubmit={props.searchSubmit}
      />

      <div>
        <RestaurantList
          {...props}
          data={props.data}
          filtered={props.filtered}
          deletePost={props.deletePost}
        />
      </div>
    </div>
  );
};

export default PostPage;
