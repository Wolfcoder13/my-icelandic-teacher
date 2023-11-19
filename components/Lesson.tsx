'use client'

import React, { useState } from 'react';

import MatchingQuestion, { MatchingQuestionProps } from './questions/MatchingQuestion';
import MultipleChoiceQuestion, { MultipleChoiceProps } from './questions/MultipleChoiceQuestion';
import WordOrderQuestion, { WordOrderProps } from './questions/WordOrderQuestion';



export interface Question {
  type: 'MultipleChoice' | 'WordOrder' | 'Matching';
  props: MultipleChoiceProps | WordOrderProps | MatchingQuestionProps;
}

export interface LessonProps {
  initialQuestions: Question[];
}


const Lesson: React.FC<LessonProps> = ({ initialQuestions }) => {
  const [currentInitialQuestionIndex, setCurrentInitialQuestionIndex] = useState(0);
  const [currentIncorrectQuestionIndex, setCurrentIncorrectQuestionIndex] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState<number[]>([]);
  const [isLessonComplete, setIsLessonComplete] = useState(false);
  const [showIncorrectMessage, setShowIncorrectMessage] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");

  const handleAnswer = (isCorrect: boolean, questionIndex: number, answer?: string) => {
    if (isCorrect) {
      setShowIncorrectMessage(false);

      const nextInitialQuestionIndex = currentInitialQuestionIndex < initialQuestions.length ? currentInitialQuestionIndex + 1 : currentInitialQuestionIndex;
      const nextIncorrectQuestionIndex = currentIncorrectQuestionIndex < incorrectQuestions.length && currentInitialQuestionIndex == initialQuestions.length ? currentIncorrectQuestionIndex + 1 : currentIncorrectQuestionIndex;

      setCurrentInitialQuestionIndex(nextInitialQuestionIndex);
      setCurrentIncorrectQuestionIndex(nextIncorrectQuestionIndex);
      if (nextInitialQuestionIndex == initialQuestions.length && (!incorrectQuestions || nextIncorrectQuestionIndex == incorrectQuestions.length)) {
        // All questions (initial and incorrect) are answered correctly
        setIsLessonComplete(true);
      }
    } else {
      setCorrectAnswer(answer || ''); // Store the correct answer
      if (!incorrectQuestions.includes(questionIndex)) {
        setIncorrectQuestions(prev => [...prev, questionIndex]);
      }
      setShowIncorrectMessage(true);
    }
  };

  const renderQuestion = () => {
    let currentQuestionIndex = currentInitialQuestionIndex < initialQuestions.length ? currentInitialQuestionIndex : currentIncorrectQuestionIndex;
    let currentQuestion = currentInitialQuestionIndex < initialQuestions.length ? initialQuestions[currentQuestionIndex] : initialQuestions[incorrectQuestions[currentIncorrectQuestionIndex]];

    if (!currentQuestion) {
      return null;
    }

    switch (currentQuestion.type) {
      case 'MultipleChoice':
        const mcProps = currentQuestion.props as MultipleChoiceProps;
        return <MultipleChoiceQuestion {...mcProps} onAnswer={(answer, isCorrect) => handleAnswer(isCorrect, currentQuestionIndex, mcProps.correctAnswer)} />;
      case 'WordOrder':
        const woProps = currentQuestion.props as WordOrderProps;
        return <WordOrderQuestion {...woProps} onAnswer={(answer, isCorrect) => handleAnswer(isCorrect, currentQuestionIndex, woProps.correctAnswer)} />;
      case 'Matching':
        const mProps = currentQuestion.props as MatchingQuestionProps;
        return <MatchingQuestion {...mProps} onAnswer={(isCorrect) => handleAnswer(isCorrect, currentQuestionIndex, '')} />;
      default:
        return null;
    }
  };

  const calculateProgress = () => {
    const totalQuestions = initialQuestions.length + incorrectQuestions.length;
    let questionsAnswered = currentInitialQuestionIndex + currentIncorrectQuestionIndex;
    return ((questionsAnswered / totalQuestions) * 100).toFixed(0);
  };

  const restartLesson = () => {
    setCurrentInitialQuestionIndex(0);
    setCurrentIncorrectQuestionIndex(0);
    setIncorrectQuestions([]);
    setIsLessonComplete(false);
    setShowIncorrectMessage(false);
    setCorrectAnswer("");
  };

  return (
    <div className="bg-gray-700 dark:bg-gray-700 min-h-screen p-6 flex justify-center items-center">
      <div style={{ minHeight: '512px' }} className={`bg-gray-100 max-w-lg w-full rounded-lg shadow-md p-6 min-h-128 flex flex-col ${isLessonComplete ? 'justify-center' : 'justify-between'}`}>

        {isLessonComplete ? (
          <>
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Congratulations!</h2>
              <p className="text-gray-600">You have completed the lesson.</p>
              {
                incorrectQuestions.length == 0 ?
                  null :
                  incorrectQuestions.length == 1 ?
                    <p className="text-gray-600">You got {incorrectQuestions.length} question wrong, but corrected it in the end. Good job!</p> :
                    <p className="text-gray-600">You got {incorrectQuestions.length} questions wrong, but corrected them in the end. Good job!</p>
              }
              <p className="text-gray-600">You get the grade <span className='font-bold'>{((initialQuestions.length / (initialQuestions.length + incorrectQuestions.length)) * 100).toFixed(0)}%</span>.</p>
              <div className='flex justify-around'>
                <button
                  onClick={restartLesson}
                  className="mt-4 bg-icelandic-blue hover:bg-icelandic-blue/50 text-white font-bold py-2 px-4 rounded"
                >
                  Restart lesson.
                </button>
                <a
                  href="/"
                >
                  <button
                    className="mt-4 bg-icelandic-blue hover:bg-icelandic-blue/50 text-white font-bold py-2 px-4 rounded"
                  >
                    Go Home
                  </button>
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Lesson</h1>
            {showIncorrectMessage && (
              <p className="text-red-500 text-center my-2">
                Incorrect answer. The correct answer is &quot;{correctAnswer}&quot;. Please try again!
              </p>
            )}
            <div className="text-gray-800">
              {renderQuestion()}
            </div>
            <div>
              <div className="w-full bg-gray-500 rounded-full h-2.5 dark:bg-gray-500 mt-4">
                <div className="bg-icelandic-blue h-2.5 rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
              </div>
              <p className="text-right text-sm text-gray-700 mt-2">{calculateProgress()}% Complete</p>
              <div className='flex justify-end'>
                <a href="/">
                  <button className="mt-4 bg-icelandic-blue hover:bg-icelandic-blue/90 text-white font-bold py-2 px-4 rounded" >
                    Go Home
                  </button>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div >
  );
};


export default Lesson;
