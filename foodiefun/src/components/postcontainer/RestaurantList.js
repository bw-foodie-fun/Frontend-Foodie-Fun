import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
    return (
        <div className="restaurant-list">
            {props.data.map(item => (
                <RestaurantCard
                    key={Math.random()} //Placeholder until items are assigned IDs
                    restaurant_name={item.restaurant_name}
                    restaurant_type={item.restaurant_type}
                    item_photo={item.item_photo}
                    food_rating={item.food_rating}
                />
            ))}
        </div>
    )
}

export default RestaurantList;