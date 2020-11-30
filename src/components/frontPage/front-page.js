import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function FrontPage(props) {
  // const testFunction = () => {
  //   console.log("Kjører func");
  // };
  //
  // return (
  //   <div>
  //     <div className="title">Arne O. Ose</div>
  //     <div className="menu">
  //       <div className="menu-item">HOME</div>
  //       <div className="menu-item"> |</div>
  //       <div className="menu-item">ABOUT</div>
  //       <div className="menu-item"> |</div>
  //       <div className="menu-item">PROJECTS</div>
  //     </div>
  //   </div>
  // );

  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Topics({ match }) {
    return (
      <div>
        <h2>Topics</h2>

        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
  }

  function Topic({ match }) {
    return (
      <h3>
        Requested topic ID:
        {match.params.topicId}
      </h3>
    );
  }

  function Navigation() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    );
  }

  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
