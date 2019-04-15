import React from 'react';
import {Link, Route} from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import RestaurantPage from './RestaurantPage'

const RestaurantList = props => {
    return (
        <div className="restaurant-list">
            {props.data.map(item => (
                <Link to="/restaurant"><RestaurantCard
                    key={Math.random()} //Placeholder until items are assigned IDs
                    restaurant_name={item.restaurant_name}
                    restaurant_type={item.restaurant_type}
                    item_photo={item.item_photo}
                    food_rating={item.food_rating}
                /></Link>
            ))}
            <Route path="/restaurant" render={props => {
                return(<RestaurantPage {...props}/>)
            }}/>
        </div>
    )
}

export default RestaurantList;