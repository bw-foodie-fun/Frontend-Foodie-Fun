import React, { Component } from 'react';
import PostPage from './components/postcontainer/PostPage';
import Login from './components/login/Login'
import './App.css';
import withAuthenticate from './components/authenticate/withAuthenticate';

const Auth = withAuthenticate(Login)(PostPage);

class App extends Component {
  render() {
    return <Auth />;
  }
}

export default App;
