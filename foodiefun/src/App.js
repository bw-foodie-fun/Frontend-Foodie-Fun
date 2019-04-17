import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import PostPage from "./components/postcontainer/PostPage";
import EditPost from "./components/postcontainer/EditPost";
import Login from "./components/login/Login";
import "./App.css";
import withAuthenticate from "./components/authenticate/withAuthenticate";
import NewLogin from "./components/login/NewLogin";
import Add from "./components/Add/add";

const Auth = withAuthenticate(Login)(PostPage);

class App extends Component {
  constructor() {
    super();
    this.state = {
      account: true,
      data: [],
      addData: [],
      inputText: "",
      searchInputText: [],
      filtered: [],
      restaurantName: "",
      restaurantType: "",
      rating: "",
      date: "",
      wait: "",
      comment: ""
    };
  }

  //search functions
  searchSubmit = event => {
    event.preventDefault();
    const filteredData = this.state.data.filter(post =>
      post.restaurant_type.includes(this.state.searchInputText)
    );
    this.setState({
      filtered: filteredData
    });
  };
  searchChange = event => {
    this.setState({
      searchInputText: event.target.value
    });
  };

  //add functions wip
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    //first make a copy of the state
    const stateCopy = this.state.addData.slice();
    //second create the new review
    const newAdd = {
      restaurantName: this.state.restaurantName,
      restaurantType: this.state.restaurantType,
      rating: this.state.rating,
      date: this.state.date,
      wait: this.state.wait,
      comment: this.state.comment
    };
    stateCopy.push(newAdd);
    //third update the state with setState
    this.setState({
      addData: stateCopy
    });
  };

  //connecting to backend
  componentDidMount() {
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    axios
      .get("https://backend-foodie-fun.herokuapp.com/api/meals", requestOptions)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        alert(err);
      });
  }

  handleSignIn = credentials => {
    axios
      .post(
        "https://backend-foodie-fun.herokuapp.com/api/auth/login",
        credentials
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        alert(err);
      });
  };

  handleSignUp = newCredentials => {
    axios
      .post(
        "https://backend-foodie-fun.herokuapp.com/api/auth/register",
        newCredentials
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.log(err);
        alert("check da console");
      });
  };

  // edit post

  editPost = (id, updatedPost) => {
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    axios
      .put(
        `https://backend-foodie-fun.herokuapp.com/api/meals/${id}`,
        updatedPost,
        requestOptions
      )
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        alert(err);
      });
  };

  // delete post

  deletePost = id => {
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    axios
      .delete(
        `https://backend-foodie-fun.herokuapp.com/api/meals/${id}`,
        requestOptions
      )
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        alert(err);
      });
  };

  // logout

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

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
              deletePost={this.deletePost}
              handleSignOut={this.handleSignOut}
            />
          )}
        />
        <Route
          exact
          path="/newlogin"
          render={props => (
            <NewLogin {...props} handleSignUp={this.handleSignUp} />
          )}
          // handleSignUp={this.handleSignUp}
        />
        
        <Route
          path="/edit-post/:id"
          render={props => <EditPost {...props} editPost={this.editPost} />}
        />
        <Route
          exact
          path="/add"
          render={props => (
            <Add
              {...props}
              handleChange={this.handleChange}
              inputText={this.state.inputText}
              addData={this.state.addData}
              restaurantName={this.state.restaurantName}
              restaurantType={this.state.restaurantType}
              rating={this.state.rating}
              date={this.state.date}
              wait={this.state.wait}
              comment={this.state.comment}
              handleSubmit={this.handleSubmit}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
