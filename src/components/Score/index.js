import React from 'react';

const Score = ({
    score,
    onReset,
}) => (
  <div className="block">
    <h1 className="title">{score > 60 ? 'Congrats! 🎉' : 'Bummer! 🤦‍♂️'}</h1>
    <h2 className="subtitle">
      Your score is
      <span className="font-bold"> {score}</span>
      %
    </h2>
    <button onClick={onReset} className="button button-primary">Try again</button>
  </div>
);

export default Score;