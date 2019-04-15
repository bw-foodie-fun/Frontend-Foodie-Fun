import React, { Component } from "react";
import dummyData from "../../dummy-data";
import AccountMenu from "./AccountMenu/AccountMenu";
import RestaurantList from './RestaurantList';

export default class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      account: true,
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data:
        localStorage.getItem("data") === null
          ? dummyData
          : JSON.parse(localStorage.getItem("data"))
    });
  }

  render() {
      return (
        <div>
          <AccountMenu account={this.state.account} />
          <div>
            <i
              onClick={() => this.setState({ account: !this.state.account })}
              className={
                this.state.account === false ? "X" : "X"
              }
            />
            <RestaurantList data={this.state.data}/>
          </div>
        </div>
      );
    }
  }
