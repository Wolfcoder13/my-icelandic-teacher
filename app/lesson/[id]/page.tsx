'use client'

import React, { useEffect, useState } from 'react';

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
  english: string;
  icelandic: string;
}

interface MatchingQuestionProps {
  pairs: MatchingPair[];
  onAnswer: (isCorrect: boolean) => void;
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




const MatchingQuestion: React.FC<MatchingQuestionProps> = ({ pairs, onAnswer }) => {
  const [shuffledIcelandicWords, setShuffledIcelandicWords] = useState<string[]>([]);
  const [selectedEnglish, setSelectedEnglish] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [isShaking, setIsShaking] = useState(false);
  
  useEffect(() => {
    // Shuffle Icelandic words and set to state
    const icelandicWords = pairs.map(pair => pair.icelandic);
    setShuffledIcelandicWords(shuffleArray(icelandicWords));
  }, [pairs]);


  const handleEnglishClick = (word: string) => {
    setSelectedEnglish(word === selectedEnglish ? null : word);
  };

  const handleIcelandicClick = (word: string) => {
    if (selectedEnglish) {
      const pair = pairs.find(p => p.english === selectedEnglish);
      if (pair && pair.icelandic === word) {
        setMatchedPairs(new Set([...matchedPairs, selectedEnglish]));
        setSelectedEnglish(null);
        if (matchedPairs.size + 1 === pairs.length) {
          onAnswer(true);
          setMatchedPairs(new Set());
        }
      } else {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500); // Reset shaking after animation duration
      }
    }
  };

  return (
    <div className={`flex justify-between ${isShaking ? 'animate-shake' : ''}`}>
      <div className="flex flex-col">
        {pairs.map(pair => (
          <button
            key={pair.english}
            onClick={() => handleEnglishClick(pair.english)}
            className={`my-1 p-2 rounded ${
              selectedEnglish === pair.english
                ? 'bg-blue-400 border-2 border-blue-600'
                : matchedPairs.has(pair.english)
                ? 'bg-gray-400'
                : 'bg-blue-200 hover:bg-blue-300'
            }`}
            disabled={matchedPairs.has(pair.english)}
          >
            {pair.english}
          </button>
        ))}
      </div>
      <div className="flex flex-col">
        {shuffledIcelandicWords.map((word, index) => (
          <button
            key={index}
            onClick={() => handleIcelandicClick(word)}
            className={`my-1 p-2 rounded ${
              Array.from(matchedPairs).includes(word) ? 'bg-gray-400' : 'bg-green-200 hover:bg-green-300'
            }`}
            disabled={Array.from(matchedPairs).includes(word)}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
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
