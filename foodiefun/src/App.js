import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import PostPage from './components/postcontainer/PostPage';
import RestaurantPage from './components/postcontainer/RestaurantPage';
import Login from './components/login/Login'
import './App.css';
import withAuthenticate from './components/authenticate/withAuthenticate';
import NewLogin from "./components/login/NewLogin";

const Auth = withAuthenticate(Login)(PostPage);

class App extends Component {
  constructor() {
    super();
    this.state = {
      account: true,
      data: []
    }
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
        <Route
          exact path="/"
          render={props => 
            <Auth
              {...props}
              data={this.state.data}
            />
          }
        />
        <Route exact path="/newlogin" component={NewLogin} />
        <Route
          path="/restaurant/:id"
          render={props => 
            <RestaurantPage
              {...props}
              data={this.state.data}
            />
          }/>
      </div>
    )
  }
}

export default App;