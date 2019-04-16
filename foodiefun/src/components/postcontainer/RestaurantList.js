import React from 'react';
import {Link} from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
    return (
        <div className="restaurant-list">
            {props.data.map(item => (
                <Link to={`/restaurant/${item.id}`} key={item.id}><RestaurantCard
                    restaurant_name={item.restaurant_name}
                    restaurant_type={item.restaurant_type}
                    item_photo={item.item_photo}
                    food_rating={item.food_rating}
                /></Link>
            ))}
        </div>
    )
}

export default RestaurantList;