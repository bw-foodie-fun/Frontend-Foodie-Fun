import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import PostPage from "./components/postcontainer/PostPage";
import RestaurantPage from "./components/postcontainer/RestaurantPage";
import Login from "./components/login/Login";
import "./App.css";
import withAuthenticate from "./components/authenticate/withAuthenticate";
import NewLogin from "./components/login/NewLogin";

const Auth = withAuthenticate(Login)(PostPage);

class App extends Component {
  constructor() {
    super();
    this.state = {
      account: true,
      data: [],
      reviewData: "",
      inputText: ""
    };
  }

  handleChange = event => {
    this.setState({ inputText: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    //first make a copy of the state
    const stateCopy = this.state.reviewData.slice();
    //second create the new review
    const newReview = {
      username: "",
      text: this.state.inputText
    };
    stateCopy.push(newReview);
    //third update the state with setState
    this.setState({
      reviewData: stateCopy
    });
  }; 

  componentDidMount() {
    axios
      .get("https://foodie-fun.herokuapp.com/api/meals/all")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <Auth
              {...props}
              data={this.state.data}
              account={this.state.account}
            />
          )}
        />
        <Route exact path="/newlogin" component={NewLogin} />
        <Route
          path="/restaurant/:id"
          render={props => <RestaurantPage {...props} data={this.state.data} />}
        />
      </div>
    );
  }
}

export default App;
