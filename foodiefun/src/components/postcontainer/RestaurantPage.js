import React from 'react';
import dummyData from '../../dummy-data';
import axios from 'axios';

class RestaurantPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
        }
    } 

    componentDidMount() {
        axios.get(`https://foodie-fun.herokuapp.com/api/meals/all`)
            .then(res => {
                this.setState({data: res.data[this.props.match.params.id - 1]})
            })
    }

    render() {
        return (
            <div>
                <h3>{this.state.data.restaurant_name}</h3>
                <p>{this.state.data.restaurant_type}</p>
                <p>{this.state.data.item_name}</p>
                <img src={this.state.data.item_photo} alt="Food item"/>
                <p>Rating: {this.state.data.food_rating}</p>
                <p>{this.state.data.date_visited}</p>
                <p>{this.state.data.wait_time}</p>
                <p>{this.state.data.item_comment}</p>
            </div>
        )
    }
}

export default RestaurantPage;