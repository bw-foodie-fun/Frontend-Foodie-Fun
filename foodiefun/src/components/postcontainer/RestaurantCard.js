import React from 'react';

const RestaurantCard = props => {
    return (
        <div className="restaurant-card">
            <h3>{props.restaurant_name}</h3>
            <p>{props.restaurant_type}</p>
            <img src={props.item_photo} alt="Restaurant"/>
            <p>Rating: {props.food_rating}</p>
        </div>
    )
}

export default RestaurantCard;