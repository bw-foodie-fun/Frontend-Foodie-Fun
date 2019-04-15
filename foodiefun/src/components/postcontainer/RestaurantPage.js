import React from 'react';
import RestaurantCard from './RestaurantCard';
import dummyData from '../../dummy-data';


class RestaurantPage extends React.Component {
    constructor() {
      super();
      this.state = {
        data: dummyData[0]
      }} 

      componentDidMount() {
          console.log("hi")
      }

      render() {
        console.log(this.state)

    return (
        <div>
            <h1>RestaurantPage</h1>
            <RestaurantCard restaurant_name={this.state.data.restaurant_name} 
            restaurant_type={this.state.data.restaurant_type} item_photo={this.state.data.item_photo} 
            food_rating={this.state.data.food_rating}/>
        </div>
    )
    }
}

export default RestaurantPage;