'use client'

import React, { useEffect } from 'react';

interface MultipleChoiceProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (answer: string, isCorrect: boolean) => void;
}


interface WordOrderProps {
  question: string;
  words: string[]; // Words to be arranged
  correctAnswer: string; // Correct sentence
  onAnswer: (answer: string, isCorrect: boolean) => void;
}


interface MatchingPair {
  icelandic: string;
  english: string;
}

interface MatchingQuestionProps {
  pairs: MatchingPair[];
  onAnswer: (answer: MatchingPair) => void; // Adjust as needed for your implementation
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceProps> = ({ question, options, correctAnswer, onAnswer }) => {
  return (
    <div>
      <p>{question}</p>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option, option === correctAnswer)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {option}
        </button>
      ))}
    </div>
  );
};


const WordOrderQuestion: React.FC<WordOrderProps> = ({ question, words, correctAnswer, onAnswer }) => {
  const [constructedAnswer, setConstructedAnswer] = React.useState<string[]>([]);

  const handleWordClick = (word: string) => {
    setConstructedAnswer([...constructedAnswer, word]);
  };

  const handleSubmit = () => {
    const answer = constructedAnswer.join(' ');
    onAnswer(answer, answer === correctAnswer);
    setConstructedAnswer([]); // Reset for next attempt
  };

  return (
    <div>
      <p>{question}</p>
      <div className="my-4">
        {words.map((word, index) => (
          <button
            key={index}
            onClick={() => handleWordClick(word)}
            className="mx-1 px-2 py-1 bg-blue-200 hover:bg-blue-300 rounded"
          >
            {word}
          </button>
        ))}
      </div>
      <div className="my-4">
        <p>Constructed Sentence:</p>
        <p className="italic">{constructedAnswer.join(' ')}</p>
      </div>
      <button 
        onClick={handleSubmit} 
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Answer
      </button>
    </div>
  );
};



const MatchingQuestion: React.FC<MatchingQuestionProps> = ({ pairs, onAnswer }) => {
  // Implement your matching logic here
  return (
    <div>
      <p>Match the Icelandic words to their English translations:</p>
      {/* Interactive component here */}
    </div>
  );
};

const shuffle = (array: string[]) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

const LessonPage: any = ({ params }: { params: { id: number } }) => {
  const handleAnswer = (answer: string, isCorrect: boolean) => {
    console.log("Answer selected:", answer, "Is Correct:", isCorrect);
    // Additional logic for handling correct/incorrect answer
  };

  const handleAnswer2 = (answer: string) => {
    console.log("Answer selected:", answer);
    // Additional logic for handling correct/incorrect answer
  };

  const handleAnswer3 = (answer: string) => {
    console.log("Answer selected:", answer);
    // Additional logic for handling correct/incorrect answer
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
        question="Translate 'I am called' to Icelandic:"
        words={["Ég", "heiti", "halló", "Takk"]} // Example words
        correctAnswer="Ég heiti"
        onAnswer={handleAnswer}
      />

        </div>
      </div>
    </div>

  );
};

export default LessonPage;
