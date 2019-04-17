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
            placeholder="Restaurant Name"
          />
        </form> <form action="" onSubmit={props.handleSubmit}>
          <input
            className="reviewForm"
            type="text"
            onChange={props.handleChange}
            value={props.inputText}
            placeholder="Restaurant Type"
          />
          </form>
        <h1>Image Goes Here</h1>
        <form action="" onSubmit={props.handleSubmit}>
          <input
            className="reviewForm"
            type="text"
            onChange={props.handleChange}
            value={props.inputText}
            placeholder="Rating:"
          />
        </form>
        <form action="" onSubmit={props.handleSubmit}>
          <input
            className="reviewForm"
            type="text"
            onChange={props.handleChange}
            value={props.inputText}
            placeholder="Add a Review:"
          />
        </form>
        <form action="" onSubmit={props.handleSubmit}>
          <input
            className="reviewForm"
            type="text"
            onChange={props.handleChange}
            value={props.inputText}
            placeholder="Date Visited:"
          />
        </form>
        <form action="" onSubmit={props.handleSubmit}>
          <input
            className="reviewForm"
            type="text"
            onChange={props.handleChange}
            value={props.inputText}
            placeholder="Wait Time:"
          />
        </form>
        <form action="" onSubmit={props.handleSubmit}>
          <input
            className="reviewForm"
            type="text"
            onChange={props.handleChange}
            value={props.inputText}
            placeholder="Comment:"
          />
        </form>
        <button>Submit</button>
      </div>
    );
  }


export default ReviewSection;
