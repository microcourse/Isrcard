import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Bookmarks } from './components/Bookmarks';
import { Github } from './components/Github';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Github} />
        <Route path='/fetchdata' component={Bookmarks} />
      </Layout>
    );
  }
}
