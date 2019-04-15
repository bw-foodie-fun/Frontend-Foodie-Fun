import React, { Component } from "react";
import {Route} from 'react-router-dom';
import dummyData from "../../dummy-data";
import AccountMenu from "./AccountMenu/AccountMenu";
import RestaurantList from './RestaurantList';
import RestaurantPage from './RestaurantPage';

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
      data: dummyData
    });
  }

  render() {
      return (
        <div>
          <div>
            <i
              onClick={() => this.setState({ account: !this.state.account })}
              className={
                this.state.account === false ? "X" : "X"
              }
            />
            <RestaurantList data={this.state.data}/>
            <Route path="/restaurant" render={props => <RestaurantPage {...props}/>}/>
          </div>
          <AccountMenu account={this.state.account} />
        </div>
      );
    }
  }
