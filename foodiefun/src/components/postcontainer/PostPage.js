import React, { Component } from "react";
import dummyData from "../../dummy-data";
import AccountMenu from "./AccountMenu/AccountMenu";
import RestaurantList from './RestaurantList';

export default class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      account: true,
      data: dummyData
    };
  }

  componentDidMount() {
    this.setState({
      data:dummyData  
    });
  }

  render() {
      return (
        <div>
          <AccountMenu account={this.state.account} />
          <div>
            <RestaurantList data={this.state.data}/>
          </div>
        </div>
      );
    }
  }
