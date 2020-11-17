import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import Blog from "./Blog";

import ProjectList from "./ProjectList";
import Project from "./Project";

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

      {/* Ovo ide u Nav */}
      {/* activeKey="/home" */}
      {/* <Nav className="justify-content-center">
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
      </Nav> */}
      <ProjectList />
    </div>
  );
}

export default App;
