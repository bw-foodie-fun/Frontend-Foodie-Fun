import React from 'react';
import ReviewSection from '../reviews/ReviewSection';

const RestaurantCard = props => {
    return (
        <div className="restaurant-card">
            <h3>{props.restaurant_name}</h3>
            <p>{props.restaurant_type}</p>
            <img src={props.item_photo} alt="Restaurant"/>
            <p>Rating: {props.food_rating}</p>
            <p>Date Visited: {props.date_visited}</p>
            <p>Wait Time: {props.wait_time}</p>
            <p>Comment: {props.comment}</p>
            
        </div>
    )
}

export default RestaurantCard;