import React, { useEffect, useState } from "react";
import { shuffleArray } from '../../utils/arrayUtils'

export interface MatchingPair {
  english: string;
  icelandic: string;
}

export interface MatchingQuestionProps {
  pairs: MatchingPair[];
  onAnswer: (isCorrect: boolean) => void;
}


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
        // Convert Set to Array, add the new item, then convert back to Set
        setMatchedPairs(new Set([...Array.from(matchedPairs), selectedEnglish]));
        setSelectedEnglish(null); // Deselect on correct match
        if (matchedPairs.size + 1 === pairs.length) {
          onAnswer(true);
        }
      } else {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500); // Reset shaking after animation duration
        setSelectedEnglish(null); // Deselect on incorrect match
      }
    }
  };

  const isIcelandicWordMatched = (icelandicWord: string) => {
    return pairs.some(pair => pair.icelandic === icelandicWord && matchedPairs.has(pair.english));
  };

  return (
    <div className={`flex justify-around ${isShaking ? 'animate-shake' : ''}`}>
      <div className="flex flex-col">
        {pairs.map(pair => (
          <button
            key={pair.english}
            onClick={() => handleEnglishClick(pair.english)}
            className={`my-1 p-2 rounded border-2 ${selectedEnglish === pair.english
              ? 'shadow-inner bg-white border-solid border-icelandic-red text-icelandic-blue'
              : matchedPairs.has(pair.english)
                ? 'bg-gray-400 border-transparent text-white'
                : 'bg-icelandic-blue hover:bg-icelandic-blue/90 border-transparent text-white' 
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
            className={`my-1 p-2 rounded text-white border-2 ${isIcelandicWordMatched(word) ? 'bg-gray-400 border-transparent' : 'bg-icelandic-blue hover:bg-icelandic-blue/90 border-transparent'
              }`}
            disabled={isIcelandicWordMatched(word)}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MatchingQuestion;