import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ProjectMenu from '../projects/project-menu';

function Menu() {
  function Home() {
    return <h1>Home.</h1>;
  }
  return (
    <Router>
      <div style={{ width: 1000, margin: '0 auto' }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/topics" render={({ match }) => <ProjectMenu match={match} />} />
      </div>
    </Router>
  );
}

export default Menu;
