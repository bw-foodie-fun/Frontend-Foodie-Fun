import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import PostPage from './components/postcontainer/PostPage';
import RestaurantPage from './components/postcontainer/RestaurantPage';
import Login from './components/login/Login'
import './App.css';
import withAuthenticate from './components/authenticate/withAuthenticate';

const Auth = withAuthenticate(Login)(PostPage);

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Auth}/>
        <Route path="/restaurant" render={props => <RestaurantPage {...props}/>}/>
      </>
    )
  }
}

export default App;