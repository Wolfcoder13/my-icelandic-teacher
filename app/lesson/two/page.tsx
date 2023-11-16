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


const LessonPage: React.FC = () => {
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
        question: "What is 'Thank you' in Icelandic?",
        options: ['Halló', 'Bless', 'Takk'],
        correctAnswer: 'Takk',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'WordOrder',
      props: {
        question: "Translate 'Thank you. My name is Andri' to Icelandic:",
        words: ['heiti', 'halló', 'Ég', 'Takk', 'Andri'],
        correctAnswer: 'Takk Ég heiti Andri',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'Matching',
      props: {
        pairs: [
          { english: 'Please', icelandic: 'Vinsamlegast' },
          { english: 'Hello', icelandic: 'Halló' },
          { english: 'No', icelandic: 'Nei' }
        ],
        onAnswer: handleAnswerMatching
      }
    },
    {
      type: 'MultipleChoice',
      props: {
        question: "What does 'Góðan dag' mean in English?",
        options: ['Good night', 'Good morning', 'Good day'],
        correctAnswer: 'Good day',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'WordOrder',
      props: {
        question: "Translate 'Halló Andri' to English:",
        words: ['name', 'Hello', 'my', 'Takk', 'is', 'Andri'],
        correctAnswer: 'Hello Andri',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'Matching',
      props: {
        pairs: [
          { english: 'Morning', icelandic: 'Morgunn' },
          { english: 'Night', icelandic: 'Nótt' },
          { english: 'Day', icelandic: 'Dagur' }
        ],
        onAnswer: handleAnswerMatching
      }
    },
    {
      type: 'MultipleChoice',
      props: {
        question: "How do you say 'I do not understand' in Icelandic?",
        options:  ['Ég skil ekki', 'Ég er frá', 'Ég veit'],
        correctAnswer: 'Ég skil ekki',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'WordOrder',
      props: {
        question: "Translate 'Can you help me?' to Icelandic:",
        words: ['hjálpað', 'mér', 'Getur', 'þú', 'að'],
        correctAnswer: 'Getur þú hjálpað mér',
        onAnswer: handleAnswer
      }
    },
    {
      type: 'Matching',
      props: {
        pairs:  [
          { english: 'Help', icelandic: 'Hjálp' },
          { english: 'Understand', icelandic: 'Skilja' },
          { english: 'Speak', icelandic: 'Tala' }
          ],
        onAnswer: handleAnswerMatching
      }
    },
    {
      type: 'WordOrder',
      props: {
        question: "Translate 'Do you speak English?' to Icelandic:",
        words: ['Talar', 'þú', 'ensku', 'segir'],
        correctAnswer: 'Talar þú ensku',
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
