import React from "react";

class AddPost extends React.Component {
  render() {
    return (
      <div>
        {this.props.reviewData.restaurant_name}
        {this.props.reviewData.restaurant_type}
        {this.props.reviewData.item_photo}
        {this.props.reviewData.food_rating}
        {this.props.reviewData.date_visited}
        {this.props.reviewData.wait_time}
      </div>
    );
  }
}

export default AddPost;
