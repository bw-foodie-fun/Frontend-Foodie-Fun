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
      restaurant_name: "",
      restaurant_type: "",
      item_name: "",
      item_photo: "",
      food_rating: "",
      // date_visited: "",
      wait_time: "",
      item_comment: "",
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
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    //first make a copy of the state
    const stateCopy = this.state.addData.slice();
    //second create the new review
    const newAdd = {
      restaurant_name: this.state.restaurant_name,
      restaurant_type: this.state.restaurant_type,
      item_name: this.state.item_name,
      item_photo: this.state.item_photo,
      food_rating: parseInt(this.state.food_rating),
      // date_visited: this.state.date_visited,
      wait_time: this.state.wait_time,
      item_comment: this.state.item_comment
    };
    stateCopy.push(newAdd);
    //third update the state with setState
    // this.setState({
    //   addData: stateCopy
    // });
    this.addPost(newAdd)
  };

  //connecting to backend
  componentDidMount() {
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    if (token) { 
      axios
        .get("https://backend-foodie-fun.herokuapp.com/api/meals", requestOptions)
        .then(res => {
          this.setState({ data: res.data });
        })
        .catch(err => {
          alert(err);
        });
    }
  }

  getAllMeals = () => {
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    if (token) { 
      axios
        .get("https://backend-foodie-fun.herokuapp.com/api/meals", requestOptions)
        .then(res => {
          this.setState({ data: res.data });
        })
        .catch(err => {
          alert(err);
        });
    }
  }

  handleSignIn = credentials => {
    axios
      .post(
        "https://backend-foodie-fun.herokuapp.com/api/auth/login",
        credentials
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.getAllMeals();
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
    }
    console.log(id, updatedPost)
    
    axios.put(`https://backend-foodie-fun.herokuapp.com/api/meals/${id}`, updatedPost, requestOptions)
      .then(res => {
        this.setState({data: res.data})
        this.getAllMeals();
      })
      .catch(err => {
        alert(err);
      });
  };

  // add post

  addPost = post => {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: {
        authorization: token
      }
    }

    axios.post('https://backend-foodie-fun.herokuapp.com/api/meals', post, requestOptions)
      .then(res => {
        // console.log(res)
        this.setState({
          data: res.data
        })
      })
      .catch(err => {
        alert(err)
      })
  }

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
        this.getAllMeals();
      })
      .catch(err => {
        alert(err);
      });
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
              getAllMeals={this.getAllMeals}
            />
          )}
        />
        <Route
          exact
          path="/newlogin"
          render={props => (
            <NewLogin {...props} handleSignUp={this.handleSignUp} />
          )}
//handleSignUp={this.handleSignUp}
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
              restaurant_name={this.state.restaurant_name}
              restaurant_type={this.state.restaurant_type}
              item_name={this.state.item_name}
              item_photo={this.state.item_photo}
              food_rating={this.state.food_rating}
              // date={this.state.date}
              wait_time={this.state.wait_time}
              item_comment={this.state.item_comment}
              handleSubmit={this.handleSubmit}
              addPost={this.addPost}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
