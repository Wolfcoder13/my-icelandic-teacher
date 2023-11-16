import React, { useEffect, useState } from "react";

interface WordOrderProps {
  question: string;
  words: string[]; // Words to be arranged
  correctAnswer: string; // Correct sentence
  onAnswer: (answer: string, isCorrect: boolean) => void;
}


const WordOrderQuestion: React.FC<WordOrderProps> = ({ question, words, correctAnswer, onAnswer }) => {
  const [selectedWords, setSelectedWords] = React.useState<string[]>([]);

  const handleWordClick = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(w => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleSubmit = () => {
    const answer = selectedWords.join(' ');
    onAnswer(answer, answer === correctAnswer);
    setSelectedWords([]); // Reset for next attempt
  };

  return (
    <div>
      <p>{question}</p>
      <div className="my-4">
        {words.map((word, index) => (
          <button
            key={index}
            onClick={() => handleWordClick(word)}
            className={`mx-1 px-2 py-1 rounded ${selectedWords.includes(word) ? 'bg-blue-400' : 'bg-blue-200 hover:bg-blue-300'
              }`}
          >
            {word}
          </button>
        ))}
      </div>
      <div className="my-4">
        <p>Constructed Sentence:</p>
        <p className="italic">{selectedWords.join(' ')}</p>
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

export default WordOrderQuestion;