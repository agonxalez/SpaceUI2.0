import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import CreateSpace from '../CreateSpace/CreateSpace';
import UpdateSpace from '../UpdateSpace/UpdateSpace';

/**
 * @name App
 * @returns component
 */
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/createSpace" render={() => <CreateSpace />} />
      <Route exact path="/updateSpace" render={() => <UpdateSpace />} />
    </Switch>
  </BrowserRouter>
);

export default App;
