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
      reviewData: [],
      inputText: "",
      searchInputText: [],
      filtered: [],
    };
  }

  searchSubmit= event => {
    console.log('hi')
    event.preventDefault();
    console.log(this.state.data)
  const filteredData = this.state.data.filter(post =>
     post.restaurant_type.includes(this.state.searchInputText))
  this.setState({
  filtered: filteredData
  })
  }
  searchChange=(event)=> {
      this.setState({
          searchInputText: event.target.value
      })
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
      username: "ilovefood",
      text: this.state.inputText
    };
    stateCopy.push(newReview);
    //third update the state with setState
    this.setState({
      reviewData: stateCopy
    });
  }; 

  componentDidMount() {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: {
        authorization: token
      }
    }
    
    axios.get("https://foodie-fun.herokuapp.com/api/meals", requestOptions)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        alert(err);
      });
  }

  handleSignIn = credentials => {
    axios.post('https://foodie-fun.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
        alert(err)
      })
  }

  handleSignUp = newCredentials => {
    axios.post('https://foodie-fun.herokuapp.com/api/auth/register', newCredentials)
      .then(res => {
        localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
        alert(err)
      })
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
              filtered={this.state.filtered}
              account={this.state.account}
              handleSignIn={this.handleSignIn}
              loggedIn={this.state.loggedIn}
              searchSubmit={this.searchSubmit}
              searchChange={this.searchChange}
              searchInputText={this.state.searchInputText}

            />
          )}
        />
        <Route
          exact path="/newlogin"
          component={NewLogin}
          handleSignUp={this.handleSignUp}
        />
        <Route
          path="/restaurant/:id"
          render={props => <RestaurantPage {...props} data={this.state.data} 
          handleSubmit={this.handleSubmit} handleChange={this.handleChange} 
          inputText={this.inputText} reviewData={this.state.reviewData}/>}
        />
      </div>
    );
  }
}

export default App;
