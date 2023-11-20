import React, { useEffect, useState } from "react";

export interface WordOrderProps {
  question: string;
  words: string[]; // Words to be arranged
  correctAnswer: string; // Correct sentence
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

const WordOrderQuestion: React.FC<WordOrderProps> = ({ question, words, correctAnswer, onAnswer }) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);

  // Shuffle words on component mount
  useEffect(() => {
    setShuffledWords(shuffleArray(words));
  }, [words]);

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
        {shuffledWords.map((word, index) => (
          <button
            key={index}
            onClick={() => handleWordClick(word)}
            className={`m-1 p-2 rounded border-2 ${selectedWords.includes(word) ? 'shadow-inner bg-white border-solid border-icelandic-red text-icelandic-blue dark:text-icelandic-blue' : 'bg-icelandic-blue hover:bg-icelandic-blue/90 border-transparent  text-white'
              }`}
          >
            {word}
          </button>
        ))}
      </div>
      <div className="my-4 h-12">
        <p>Constructed Sentence:</p>
        <p className="font-bold mt-2">{selectedWords.join(' ')}</p>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default WordOrderQuestion;
