import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
      home
      about 
      work
      contact
    </div>
  );
}

export default App;
