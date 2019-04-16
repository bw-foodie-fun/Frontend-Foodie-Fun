import React from "react";
import Review from "./Reviews";


const ReviewSection = props => {
    return (
      <div className="reviews">
        {props.reviewData && props.reviewData.map((review, index) => (
          <Review key={index} reviewData={review} />
        ))}
        <form action="" onSubmit={props.handleSubmit}>
          <input
            className="reviewForm"
            type="text"
            onChange={props.handleChange}
            value={props.inputText}
            placeholder="Add a Review"
          />
        </form>
      </div>
    );
  }


export default ReviewSection;
