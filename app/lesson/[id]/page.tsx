'use client'

import React from 'react';

import MatchingQuestion, { MatchingQuestionProps } from '../../../components/questions/MatchingQuestion';
import MultipleChoiceQuestion, { MultipleChoiceProps } from '../../../components/questions/MultipleChoiceQuestion';
import WordOrderQuestion, { WordOrderProps } from '../../../components/questions/WordOrderQuestion';



// Assume this is a type for your questions
interface Question {
  type: 'MultipleChoice' | 'WordOrder' | 'Matching';
  props: MultipleChoiceProps | WordOrderProps | MatchingQuestionProps;
}


const LessonPage: React.FC<{ params: { id: number } }> = ({ params }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [failedAttempts, setFailedAttempts] = React.useState<number[]>([]);
  const [isLessonComplete, setIsLessonComplete] = React.useState(false);

  const handleAnswer = (answer: string, isCorrect: boolean) => {
    console.log("Answer selected:", answer, "Is Correct:", isCorrect);
  
    if (isCorrect) {
      setCurrentQuestionIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        console.log("Current Index:", prevIndex, "Next Index:", nextIndex, "Questions Length:", initialQuestions.length);
        if (nextIndex < initialQuestions.length) {
          return nextIndex;
        } else {
          setIsLessonComplete(true);
          return prevIndex;
        }
      });
    } else {
      let newFailedAttempts = [...failedAttempts];
      newFailedAttempts[currentQuestionIndex]++;
      setFailedAttempts(newFailedAttempts);
    }
  };
  

const handleAnswerMatching = (isCorrect: boolean) => {
  console.log("Answer Is Correct:", isCorrect);

  if (isCorrect) {
    setCurrentQuestionIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < initialQuestions.length) {
        return nextIndex;
      } else {
        setIsLessonComplete(true); // All questions are done
        return prevIndex; // Keep the index unchanged
      }
    });
  } else {
    let newFailedAttempts = [...failedAttempts];
    newFailedAttempts[currentQuestionIndex]++;
    setFailedAttempts(newFailedAttempts);
  }
};

  

  // Initial questions array
  const initialQuestions: Question[] = [
    {
      type: 'MultipleChoice',
      props: {
        question: "What is 'Hello' in Icelandic?",
        options: ['Halló', 'Bless', 'Takk'],
        correctAnswer: 'Halló',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'WordOrder',
      props: {
        question: "Translate 'My name is Andri' to Icelandic:",
        words: ['heiti', 'halló', 'Ég', 'Takk', 'Andri'],
        correctAnswer: 'Ég heiti Andri',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'Matching',
      props: {
        pairs: [
          { english: 'Goodbye', icelandic: 'Bless' },
          { english: 'Yes', icelandic: 'Já' },
          { english: 'No', icelandic: 'Nei' }
        ],
        onAnswer: handleAnswerMatching
      }
    },
    {
      type: 'MultipleChoice',
      props: {
        question: "What is 'Bye' in Icelandic?",
        options: ['Halló', 'Bless', 'Takk'],
        correctAnswer: 'Bless',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'WordOrder',
      props: {
        question: "Translate 'Hello Andri' to Icelandic:",
        words: ['heiti', 'Halló', 'Ég', 'Takk', 'Andri'],
        correctAnswer: 'Halló Andri',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'Matching',
      props: {
        pairs: [
          { english: 'I', icelandic: 'Ég' },
          { english: 'Bye', icelandic: 'Bless' },
          { english: 'Yes', icelandic: 'Já' }
        ],
        onAnswer: handleAnswerMatching
      }
    },
    {
      type: 'MultipleChoice',
      props: {
        question: "What is 'Thanks' in Icelandic?",
        options: ['Halló', 'Bless', 'Takk'],
        correctAnswer: 'Takk',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'WordOrder',
      props: {
        question: "Translate 'I am Andri' to Icelandic:",
        words: ['heiti', 'halló', 'Ég', 'Takk', 'Andri'],
        correctAnswer: 'Ég heiti Andri',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'Matching',
      props: {
        pairs: [
          { english: 'Hello', icelandic: 'Halló' },
          { english: 'Yes', icelandic: 'Já' },
          { english: 'No', icelandic: 'Nei' }
        ],
        onAnswer: handleAnswerMatching
      }
    },
    {
      type: 'WordOrder',
      props: {
        question: "Translate 'Hello, what is your name?' to Icelandic:",
        words: ['heiti', 'Halló', 'Ég', 'hvað', 'Andri', 'heitir', 'þú'],
        correctAnswer: 'Halló hvað heitir þú',
        onAnswer: handleAnswer
      }
    },
  ];


  React.useEffect(() => {
    setQuestions(initialQuestions);
    setFailedAttempts(new Array(initialQuestions.length).fill(0));
    console.log("Questions Length:", initialQuestions.length); // Add this line for debugging
  }, []);
  


  // Render current question based on the type
  const renderQuestion = () => {

    if (currentQuestionIndex >= questions.length) {
      return null; // or some fallback UI
    }

    const currentQuestion = questions[currentQuestionIndex];

    switch (currentQuestion.type) {
      case 'MultipleChoice':
        // Explicitly pass the correct props for a MultipleChoiceQuestion
        const mcProps = currentQuestion.props as MultipleChoiceProps;
        return (
          <MultipleChoiceQuestion
            question={mcProps.question}
            options={mcProps.options}
            correctAnswer={mcProps.correctAnswer}
            onAnswer={mcProps.onAnswer}
          />
        );

      case 'WordOrder':
        // Explicitly pass the correct props for a WordOrderQuestion
        const woProps = currentQuestion.props as WordOrderProps;
        return (
          <WordOrderQuestion
            question={woProps.question}
            words={woProps.words}
            correctAnswer={woProps.correctAnswer}
            onAnswer={woProps.onAnswer}
          />
        );

      case 'Matching':
        // Explicitly pass the correct props for a MatchingQuestion
        const mqProps = currentQuestion.props as MatchingQuestionProps;
        return (
          <MatchingQuestion
            pairs={mqProps.pairs}
            onAnswer={mqProps.onAnswer}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 text-black">
      {/* ... */}
      {isLessonComplete ? (
        <div>Congratulations! You have completed the lesson.</div>
      ) : (
        renderQuestion()
      )}
    </div>
  );
};


export default LessonPage;
