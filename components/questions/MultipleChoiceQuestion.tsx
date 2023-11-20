import React, { useState, useEffect } from 'react';

export interface MultipleChoiceProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (answer: string, isCorrect: boolean) => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MultipleChoiceQuestion: React.FC<MultipleChoiceProps> = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  // Shuffle options on component mount
  useEffect(() => {
    setShuffledOptions(shuffleArray(options));
  }, [options]);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption, selectedOption === correctAnswer);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <p>{question}</p>
      <div className="flex flex-wrap gap-2">
        {shuffledOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedOption(option)}
            className={`p-2 mt-3 rounded border-2 ${selectedOption === option ? 'shadow-inner bg-white border-solid border-2 border-icelandic-red text-icelandic-blue' : 'bg-icelandic-blue hover:bg-icelandic-blue/90 border-transparent text-white'}`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        disabled={selectedOption === null}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default MultipleChoiceQuestion;
