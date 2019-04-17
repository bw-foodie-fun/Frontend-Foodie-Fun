import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
    const {filtered,data} = props
    const restaurant = filtered.length === 0 ? data : filtered
    return (
        <div className="restaurant-list">
            {restaurant.map(item => (
                <RestaurantCard
                    {...props}
                    key={item.id}
                    id={item.id}
                    restaurant_name={item.restaurant_name}
                    restaurant_type={item.restaurant_type}
                    item_name={item.item_name}
                    item_photo={item.item_photo}
                    food_rating={item.food_rating}
                    date_visited={item.date_visited}
                    wait_time={item.wait_time}
                    comment={item.comment}
                    deletePost={props.deletePost}
                />
            ))}
            
        </div>
    )
}

export default RestaurantList;