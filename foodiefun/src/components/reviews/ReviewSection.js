// import React from "react";
// import Review from "./Reviews";

// class ReviewSection extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reviewData: props.ReviewData,
//       inputText: ""
//     };
//   }
//   handleChange = event => {
//     this.setState({ inputText: event.target.value });
//   };

  handleSubmit = event => {
    event.preventDefault();
    //first make a copy of the state
    const stateCopy = this.state.reviewData.slice();
    //second create the new review
    const newReview = {
      username: "",
      text: this.state.inputText
    };
    stateCopy.push(newReview);
    //third update the state with setState
    this.setState({
      reviewData: stateCopy
    });
  };
  render() {
    return (
      <div className="reviews">
        {this.state.reviewData.map((review, index) => (
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
}

// export default ReviewSection;
