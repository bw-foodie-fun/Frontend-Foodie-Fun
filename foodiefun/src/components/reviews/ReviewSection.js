import React from "react";
import Review from "./Reviews";


const ReviewSection = props => {
    return (
      <div className="reviews">
        {this.props.reviewData.map((review, index) => (
          <Review key={index} reviewData={review} />
        ))}
        <form action="" onSubmit={this.handleSubmit}>
          <input
            className="reviewForm"
            type="text"
            onChange={this.handleChange}
            value={this.state.inputText}
            placeholder="Add a Review"
          />
        </form>
      </div>
    );
  }


export default ReviewSection;
