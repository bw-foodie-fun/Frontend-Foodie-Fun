import React from "react";

class Review extends React.Component {
  render() {
    return (
      <div>
        <span className="item">
          <strong>{this.props.reviewData.item_name} </strong>
        </span>
        <span className="reviews">{this.props.reviewData.item_comment}</span>
      </div>
    );
  }
}

export default Review;
