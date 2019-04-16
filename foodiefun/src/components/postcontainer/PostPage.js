import React, { Component } from "react";
import axios from 'axios';
import ReviewSection from './../reviews/ReviewSection';

import AccountMenu from "./AccountMenu/AccountMenu";
import RestaurantList from './RestaurantList';
import NavBar from './NavBar'

export default class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      account: true,
      data: []
    };
  }

  componentDidMount() {
    axios.get('https://foodie-fun.herokuapp.com/api/meals/all')
      .then(res => {
        this.setState({data: res.data})
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
      return (
        <div>
          <NavBar/>
          <AccountMenu account={this.state.account} />
          <div>
            <RestaurantList data={this.state.data}/>
            <ReviewSection reviewData={this.state.reviewData}/>
          </div>
        </div>
      );
    }
  }
