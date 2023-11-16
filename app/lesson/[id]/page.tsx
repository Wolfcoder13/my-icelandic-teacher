'use client'

import React from 'react';

import MatchingQuestion from '../../../components/questions/MatchingQuestion';
import MultipleChoiceQuestion from '../../../components/questions/MultipleChoiceQuestion';
import WordOrderQuestion from '../../../components/questions/WordOrderQuestion';


const LessonPage: any = ({ params }: { params: { id: number } }) => {
  const handleAnswer = (answer: string, isCorrect: boolean) => {
    console.log("Answer selected:", answer, "Is Correct:", isCorrect);
    // Additional logic for handling correct/incorrect answer
  };

  const handleAnswer2 = (answer: string) => {
    console.log("Answer selected:", answer);
    // Additional logic for handling correct/incorrect answer
  };

  const handleMatchingAnswer = (isCorrect: boolean) => {
    console.log("All pairs matched correctly:", isCorrect);
    // Additional logic as needed
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 text-black">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Lesson {params.id}: Basic Icelandic
        </h1>

        <div className="space-y-4">
          <MultipleChoiceQuestion
            question="What is 'Hello' in Icelandic?"
            options={(["Halló", "Bless", "Takk"])}
            correctAnswer="Halló"
            onAnswer={handleAnswer}
          />

          <WordOrderQuestion
            question="Translate 'My name is Andri' to Icelandic:"
            words={["heiti", "halló", "Ég", "Takk", "Andri"]} // Example words
            correctAnswer="Ég heiti Andri"
            onAnswer={handleAnswer}
          />

          <MatchingQuestion
            pairs={[
              { english: "Goodbye", icelandic: "Bless" },
              { english: "Yes", icelandic: "Já" },
              { english: "No", icelandic: "Nei" }
            ]}
            onAnswer={handleMatchingAnswer}
          />

        </div>
      </div>
    </div>

  );
};

export default LessonPage;
