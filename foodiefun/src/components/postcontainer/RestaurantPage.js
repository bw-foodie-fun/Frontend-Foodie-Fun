import React from 'react';

const RestaurantPage = props => {
    const item = props.data.find(item => {
        return `${item.id}` === props.match.params.id;
      });
    return (
        <div>
            <h3>{item.restaurant_name}</h3>
            <p>{item.restaurant_type}</p>
            <p>{item.item_name}</p>
            <img src={item.item_photo} alt="Food item"/>
            <p>Rating: {item.food_rating}</p>
            <p>{item.date_visited}</p>
            <p>{item.wait_time}</p>
            <p>{item.item_comment}</p>
        </div>
    )

}

export default RestaurantPage;