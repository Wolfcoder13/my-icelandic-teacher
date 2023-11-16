import React from 'react'

interface MultipleChoiceProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (answer: string, isCorrect: boolean) => void;
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

export default MultipleChoiceQuestion;