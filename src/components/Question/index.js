import React from 'react';

const Question = ({
    onNextQuestion,
    question: {
      question,
      options,
    },
}) => {
  const renderButtons = () =>  options.split(', ').sort().map(opt => (
    <button
      key={opt}
      className="button"
      onClick={onNextQuestion}
      value={opt}
    >
      {opt}
    </button>
  ));

  return (
    <div className="block">
      <h1 className="title">{question}</h1>
      <div className="space-x-4">
        {renderButtons()}
      </div>
    </div>
  );
};

export default Question;