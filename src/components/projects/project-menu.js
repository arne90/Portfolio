import React, { useState } from 'react';
import { TOPICS } from './constants';
import { Link, Route } from 'react-router-dom';

export default function ProjectMenu(props) {
  const { match } = props;
  function Resource({ match }) {
    const topic = TOPICS.find(({ id }) => id === match.params.topicId).resources.find(({ id }) => id === match.params.subId);

    return (
      <div>
        <h3>{topic.name}</h3>
        <p>{topic.description}</p>
        <a href={topic.url}>More info.</a>
      </div>
    );
  }

  function Topic({ match }) {
    const topic = TOPICS.find(({ id }) => id === match.params.topicId);

    return (
      <div>
        <h2>{topic.name}</h2>
        <p>{topic.description}</p>

        <ul>
          {topic.resources.map(sub => (
            <li key={sub.id}>
              <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
            </li>
          ))}
        </ul>

        <hr />

        <Route path={`${match.path}/:subId`} component={Resource} />
      </div>
    );
  }

  // function Topics({match}) {
  console.log(match);
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {TOPICS.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  );
  // }
}
