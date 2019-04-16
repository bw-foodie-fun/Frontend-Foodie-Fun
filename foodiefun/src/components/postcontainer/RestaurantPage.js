import React from 'react';

const RestaurantPage = props => {

    // componentDidMount() {
    //     axios.get(`https://foodie-fun.herokuapp.com/api/meals/all`)
    //         .then(res => {
    //             this.setState({data: res.data[this.props.match.params.id - 1]})
    //         })
    // }

    return (
        <div>
            <h3>{props.data.restaurant_name}</h3>
            <p>{props.data.restaurant_type}</p>
            <p>{props.data.item_name}</p>
            <img src={props.data.item_photo} alt="Food item"/>
            <p>Rating: {props.data.food_rating}</p>
            <p>{props.data.date_visited}</p>
            <p>{props.data.wait_time}</p>
            <p>{props.data.item_comment}</p>
        </div>
    )

}

export default RestaurantPage;