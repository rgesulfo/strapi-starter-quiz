import * as React from 'react';

const Intro = ({
    onStart,
}) => (
  <div className="block">
    <h1 className="title">Feeling tech-savvy?</h1>
    <h2 className="subtitle">Test your tech knowledge</h2>
    <button onClick={onStart} className="button button-primary">test your skills</button>
  </div>
);

export default Intro;