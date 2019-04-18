import React from "react";
import { Link } from "react-router-dom";

import "../postcontainer/RestaurantCard.css";

class RestaurantCard extends React.Component {
  deletePost = () => {
    this.props.deletePost(this.props.id);
  };

  render() {
    return (
      <div className="restaurant-card">
        <h3>{this.props.restaurant_name}</h3>
        <p className="green">{this.props.restaurant_type}</p>
        <p className="item">
          <strong>Order: </strong>
          {this.props.item_name}
        </p>
        <img className="pic" src={this.props.item_photo} alt="Restaurant" />
        <p className="inline">
          <strong>Meal Rating (1 to 5):</strong>
        </p>{" "}
        <p className={`inline ${this.props.food_rating >= 3 ? "good" : "bad"}`}>
          {this.props.food_rating}
        </p>
        {/* <p>Date Visited: {this.props.date_visited}</p> */}
        <p>
          <strong>Wait Time: </strong>
          {this.props.wait_time}
        </p>
        <p className="comment">
          <strong>Comment: </strong>
          {this.props.item_comment}
        </p>
        <Link to={`/edit-post/${this.props.id}`}>
          <button className="sub">Edit</button>
        </Link>
        <button onClick={this.deletePost} className="sub">
          Delete
        </button>
      </div>
    );
  }
}

export default RestaurantCard;
