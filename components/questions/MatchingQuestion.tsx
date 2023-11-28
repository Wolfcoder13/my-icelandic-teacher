import React, { useEffect, useState } from "react";
import { shuffleArray } from '../../utils/arrayUtils';

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
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedWordLang, setSelectedWordLang] = useState<'english' | 'icelandic' | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    setShuffledIcelandicWords(shuffleArray(pairs.map(pair => pair.icelandic)));
    setSelectedWord(null);
    setSelectedWordLang(null);
    setMatchedPairs(new Set());
    setIsShaking(false);
  }, [pairs]);

  const resetSelection = () => {
    setSelectedWord(null);
    setSelectedWordLang(null);
    setIsShaking(false);
  };

  const handleWordClick = (word: string, lang: 'english' | 'icelandic') => {
    if (selectedWord && selectedWordLang && selectedWordLang !== lang) {
      const matchingPair = pairs.find(pair =>
        (lang === 'english' && pair.english === word && pair.icelandic === selectedWord) ||
        (lang === 'icelandic' && pair.icelandic === word && pair.english === selectedWord)
      );

      if (matchingPair) {
        setMatchedPairs(new Set([...Array.from(matchedPairs), matchingPair.english, matchingPair.icelandic]));
        resetSelection();
        if (matchedPairs.size + 2 >= pairs.length * 2) {
          onAnswer(true);
        }
      } else {
        setIsShaking(true);
        setTimeout(() => resetSelection(), 500);
      }
    } else {
      setSelectedWord(word);
      setSelectedWordLang(lang);
    }
  };

  const isWordMatched = (word: string) => {
    return matchedPairs.has(word);
  };

  return (
    <div className={`flex flex-col items-center justify-center ${isShaking ? 'animate-shake' : ''}`}>
      <div className="mb-4">
        <p className="text-center font-semibold">Match the English words with their Icelandic counterparts:</p>
      </div>
      <div className="flex justify-around w-full">
        <div className="flex flex-col">
          {pairs.map(pair => (
            <button
              key={pair.english}
              onClick={() => handleWordClick(pair.english, 'english')}
              className={`my-1 p-2 rounded border-2 ${selectedWord === pair.english && selectedWordLang === 'english'
                ? 'shadow-inner bg-white border-solid border-icelandic-red text-icelandic-blue'
                : isWordMatched(pair.english)
                  ? 'bg-gray-400 border-transparent text-white'
                  : 'bg-icelandic-blue hover:bg-icelandic-blue/90 border-transparent text-white'
                }`}
              disabled={isWordMatched(pair.english)}
            >
              {pair.english}
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          {shuffledIcelandicWords.map((word, index) => (
            <button
              key={index}
              onClick={() => handleWordClick(word, 'icelandic')}
              className={`my-1 p-2 rounded border-2 ${selectedWord === word && selectedWordLang === 'icelandic'
                ? 'shadow-inner bg-white border-solid border-icelandic-red text-icelandic-blue'
                : isWordMatched(word)
                  ? 'bg-gray-400 border-transparent text-white'
                  : 'bg-icelandic-blue hover:bg-icelandic-blue/90 border-transparent text-white'
                }`}
              disabled={isWordMatched(word)}
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchingQuestion;
