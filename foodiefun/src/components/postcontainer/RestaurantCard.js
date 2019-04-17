import React from 'react';
import {Link} from 'react-router-dom';

class RestaurantCard extends React.Component {

    deletePost = () => {
        this.props.deletePost(this.props.id)
        // this.props.history.push("/")
    }

    render() {
        return (
            <div className="restaurant-card">
                <h3>{this.props.restaurant_name}</h3>
                <p>{this.props.restaurant_type}</p>
                <p>{this.props.item_name}</p>
                <img src={this.props.item_photo} alt="Restaurant"/>
                <p>Rating: {this.props.food_rating}</p>
                <p>Date Visited: {this.props.date_visited}</p>
                <p>Wait Time: {this.props.wait_time}</p>
                <p>Comment: {this.props.comment}</p>
                <Link to={`/edit-post/${this.props.id}`}><button>Edit</button></Link>
                <button onClick={this.deletePost}>Delete Post</button>
            </div>
        )
    }
}

export default RestaurantCard;