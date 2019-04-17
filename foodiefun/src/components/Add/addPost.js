import React from "react";

class Review extends React.Component {
  render() {
    return (
      <div>
        <span className="item">
          <strong>{this.props.reviewData.username} </strong>
        </span>
        <span className="reviews">{this.props.reviewData.text}</span>
      </div>
    );
  }
}

export default Review;
