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
                 />
        {/* <AccountMenu account={props.account} /> */}
        <div>
          <RestaurantList data={props.data}
          filtered={props.filtered}
      />
          {/* <ReviewSection reviewData={props.reviewData}/> */}
        </div>
      </div>
    );

}

export default PostPage;