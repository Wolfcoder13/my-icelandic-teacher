import React, { useState } from 'react';

export interface MultipleChoiceProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (answer: string, isCorrect: boolean) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceProps> = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption, selectedOption === correctAnswer);
    }
  };

  return (
    <div>
      <p>{question}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedOption(option)}
            className={`px-2 py-1 rounded ${selectedOption === option ? 'bg-blue-400' : 'bg-blue-200 hover:bg-blue-300'}`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        disabled={selectedOption === null}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default MultipleChoiceQuestion;
