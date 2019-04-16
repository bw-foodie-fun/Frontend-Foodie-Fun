import React from "react";
import ReviewSection from './../reviews/ReviewSection';

import AccountMenu from "./AccountMenu/AccountMenu";
import RestaurantList from './RestaurantList';
import NavBar from './NavBar'

const PostPage = props => {
    return (
      <div>
        <NavBar/>
        {/* <AccountMenu account={props.account} /> */}
        <div>
          <RestaurantList data={props.data}/>
          {/* <ReviewSection reviewData={props.reviewData}/> */}
        </div>
      </div>
    );

}

export default PostPage;