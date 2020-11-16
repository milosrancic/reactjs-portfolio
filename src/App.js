import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import Blog from "./Blog";

function App() {
  return (
    <div className="App">
      {/* <Router>
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
      </Router> */}
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className="">
            Home?
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about-me">About me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/blog">Blog</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default App;
