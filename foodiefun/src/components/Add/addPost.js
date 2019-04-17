import React from "react";

class AddPost extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.addData.restaurantName} </h2>
        <h3> {this.props.addData.restaurantType} </h3>
        <h4> {this.props.addData.rating} </h4>
        <h4> {this.props.addData.date} </h4>
        <h4> {this.props.addData.wait}</h4>
      </div>
    );
  }
}

export default AddPost;
