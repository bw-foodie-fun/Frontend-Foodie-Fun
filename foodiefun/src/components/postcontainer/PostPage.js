import React from "react";
import AccountMenu from "./AccountMenu/AccountMenu";
import RestaurantList from './RestaurantList';
import NavBar from './NavBar'

const PostPage = props => {
    return (
      <div>
        <NavBar searchInputText={props.searchInputText}
                 searchChange={props.searchChange}
                 searchSubmit={props.searchSubmit}
                 handleSignOut={props.handleSignOut}
                 />
        {/* <AccountMenu account={props.account} /> */}
        <div>
          <RestaurantList
            data={props.data}
            filtered={props.filtered}
            deletePost={props.deletePost}
          />
        </div>
      </div>
    );

}

export default PostPage;