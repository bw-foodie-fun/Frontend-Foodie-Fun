import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import PostPage from './components/postcontainer/PostPage';
import RestaurantPage from './components/postcontainer/RestaurantPage';
import Login from './components/login/Login'
import './App.css';
import withAuthenticate from './components/authenticate/withAuthenticate';
import NewLogin from "./components/login/NewLogin";

const Auth = withAuthenticate(Login)(PostPage);

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/newlogin" component={NewLogin} />
        <Route path="/restaurant/:id" component={RestaurantPage}/>
      </div>
    )
  }
}

export default App;