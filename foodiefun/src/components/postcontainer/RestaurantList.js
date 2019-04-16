import React from 'react';
import {Link} from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
    const {filtered,data} = props
    const restaurant = filtered.length === 0 ? data : filtered
    console.log(filtered)
    return (
        <div className="restaurant-list">
            {restaurant.map(item => (
                <RestaurantCard
                    restaurant_name={item.restaurant_name}
                    restaurant_type={item.restaurant_type}
                    item_photo={item.item_photo}
                    food_rating={item.food_rating}
                    date_visited={item.date_visited}
                    wait_time={item.wait_time}
                    comment={item.comment}
                />
            ))}
            
        </div>
    )
}

export default RestaurantList;