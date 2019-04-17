import React from "react";
import RestaurantList from './RestaurantList';
import NavBar from './NavBar'

const PostPage = props => {
    return (
      <div>
        <NavBar searchInputText={props.searchInputText}
                 searchChange={props.searchChange}
                 searchSubmit={props.searchSubmit}
              
                 />
        
        <div>
          <RestaurantList data={props.data}
          filtered={props.filtered}
      />
        </div>
      </div>
    );

}

export default PostPage;