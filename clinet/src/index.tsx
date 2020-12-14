import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path='/task' component={Main} />
    {/* <Route path='/task/:id' component={Main} />
    <Route path='/task/:id' component={Main} /> */}
  </Switch>
  </BrowserRouter>,
  document.getElementById('root') 
)