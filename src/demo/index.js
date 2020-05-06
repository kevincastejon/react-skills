import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {  Switch, Route, BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const DocuRedirect = () => {
  useEffect(() => {
    window.location.href = "/documentation"
  })
  return(<>redirecting...</>)
}

const StoryBookRedirect = () => {
  useEffect(() => {
    window.location.href = "/storybook"
  })
  return(<>redirecting...</>)
}

ReactDOM.render(
  <Router basename="/react-skills">
    <Switch>
      <Route path="/demo">
        <App />
      </Route>
      <Route path="/storybook">
        <StoryBookRedirect />
      </Route>
      <Route path="/">
        <DocuRedirect />
      </Route>
    </Switch>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
