import React from 'react';

export default function Title() {
  return (
    <section className="title-base">
      <h1 className="title-h1">
        {/*<div className="title-top-line" />*/}
        <div className="title-line" />
        {/*<div className="title-top-line"/>*/}
        <div className="title-wrapper">
          {/*<div className="title-line-middle"/>*/}

          <div className="title-text-wrapper">
            <span>A</span>
            <span>R</span>
            <span>N</span>
            <span>E</span>
            <span className="ml-3 mr-2">O.</span>
            <span>O</span>
            <span>S</span>
            <span>E</span>
          </div>
        </div>
        <div className="title-bottom-line" />
      </h1>

      <h2>
        <span>THIS IS A TEST</span>
      </h2>
      <p>this is some content</p>
    </section>
  );
}
