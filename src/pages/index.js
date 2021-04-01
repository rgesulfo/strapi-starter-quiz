import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Intro from '../components/Intro';
import Question from '../components/Question';
import Score from '../components/Score';

const Quiz = () => {
  const data = useStaticQuery(graphql`query {
    allStrapiQuizzes {
      nodes {
        questions {
          answer
          options
          question
        }
      }
    }
  }
  `);

  const quiz = data.allStrapiQuizzes.nodes[0];

  const [state, setState] = useState({
    score: 0,
    screen: 'intro',
    questions: quiz.questions,
    index: 0,
  }, []);

  const { score, screen, questions, index } = state;

  const onStart = () => setState({...state, screen: 'question'});

  const onNextQuestion = e => {
    const val = e.target.value;
    const { answer } = questions[index];

    setState({
      ...state,
      index: index + 1,
      score: score + (val === answer ? 1 : 0),
    });
  };

  const onReset = () => setState({
    ...state,
    screen: 'intro',
    score: 0,
  });

  if (index >= questions.length && screen !== 'score') setState({
    ...state,
    screen: 'score',
    index: 0,
  });

  const renderStep = () => {
    switch (screen) {
      case 'intro':
        return <Intro onStart={onStart} />;
      case 'question':
        return <Question onNextQuestion={onNextQuestion} question={questions[index]} />;
      case 'score':
        return <Score onReset={onReset} score={(score / questions.length).toFixed(2) * 100} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center h-screen pb-24">
      {renderStep()}
    </div>
  );
};



export default Quiz;