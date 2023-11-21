'use client'

import React, { useEffect, useState } from 'react';
import Lesson, { Question } from '../../../components/Lesson';
import { shuffleArray } from '../../../utils/arrayUtils'


const initialQuestions: Question[] = [
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'Good night' in Icelandic?",
      options: ['Góðan daginn', 'Góða nótt', 'Gott kvöld'],
      correctAnswer: 'Góða nótt',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'I need help' to Icelandic:",
      words: ['Ég', 'þarf', 'hjálp', 'halló', 'Þú'],
      correctAnswer: 'Ég þarf hjálp',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Water', icelandic: 'Vatn' },
        { english: 'Fire', icelandic: 'Eldur' },
        { english: 'Wind', icelandic: 'Vindur' }
      ],
      onAnswer: (_: any) => { }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What does 'Hvernig hefur þú það?' mean?",
      options: ['How are you?', 'What is your name?', 'Where are you from?'],
      correctAnswer: 'How are you?',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'The cat sleeps on the chair' to Icelandic:",
      words: ['Kötturinn', 'sefur', 'á', 'stólnum', 'vaknar', 'borðinu', 'gólfinu'],
      correctAnswer: 'Kötturinn sefur á stólnum',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Tree', icelandic: 'Tré' },
        { english: 'Flower', icelandic: 'Blóm' },
        { english: 'Grass', icelandic: 'Gras' }
      ],
      onAnswer: (_: any) => { }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "Which phrase means 'See you later' in Icelandic?",
      options: ['Sjáumst síðar', 'Góðan dag', 'Takk fyrir'],
      correctAnswer: 'Sjáumst síðar',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'It is sunny today' to Icelandic:",
      words: ['Það', 'er', 'sólríkt', 'í', 'dag', 'á', 'morgun'],
      correctAnswer: 'Það er sólríkt í dag',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Snow', icelandic: 'Snjór' },
        { english: 'Rain', icelandic: 'Rigning' },
        { english: 'Cloud', icelandic: 'Ský' }
      ],
      onAnswer: (_: any) => { }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'I am happy' in Icelandic?",
      options: ['Ég er hamingjusamur', 'Ég er þreyttur', 'Ég er sorgmæddur'],
      correctAnswer: 'Ég er hamingjusamur',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'Good evening' in Icelandic?",
      options: ['Góðan daginn', 'Góða nótt', 'Gott kvöld'],
      correctAnswer: 'Góða kvöld',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'I don't need help' to Icelandic:",
      words: ['Ég', 'þarf', 'hjálp', 'halló', 'Þú', 'ekki'],
      correctAnswer: 'Ég þarf ekki hjálp',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Day', icelandic: 'Dagur' },
        { english: 'Evening', icelandic: 'Kvöld' },
        { english: 'Night', icelandic: 'Nótt' }
      ],
      onAnswer: (_: any) => { }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What does 'Hvað heitir þú' mean?",
      options: ['How are you?', 'What is your name?', 'Where are you from?'],
      correctAnswer: 'What is your name?',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'The dog sleeps on the chair' to Icelandic:",
      words: ['Hundurinn', 'sefur', 'á', 'stólnum', 'vaknar', 'borðinu', 'gólfinu'],
      correctAnswer: 'Hundurinn sefur á stólnum',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'You', icelandic: 'Þú' },
        { english: 'Hann', icelandic: 'He' },
        { english: 'Hún', icelandic: 'She' }
      ],
      onAnswer: (_: any) => { }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "Which phrase means 'See you this evening' in Icelandic?",
      options: ['Sjáumst síðar', 'Sjáumst í kvöld', 'Takk fyrir'],
      correctAnswer: 'Sjáumst í kvöld',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'It is raining today' to Icelandic:",
      words: ['Það', 'er', 'rigning', 'í', 'dag', 'á', 'morgun'],
      correctAnswer: 'Það er rigning í dag',
      onAnswer: (_, __) => { }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Sun', icelandic: 'Sól' },
        { english: 'Cloud', icelandic: 'Ský' },
        { english: 'Dog', icelandic: 'Hundur' }
      ],
      onAnswer: (_: any) => { }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'I am sad' in Icelandic?",
      options: ['Ég er hamingjusamur', 'Ég er þreyttur', 'Ég er sorgmæddur'],
      correctAnswer: 'Ég er sorgmæddur',
      onAnswer: (_, __) => { }
    }
  }
];

const LessonPage: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Shuffle the questions and store in state
    const shuffled = shuffleArray(initialQuestions).slice(0, 10);
    setShuffledQuestions(shuffled);
  }, []);

  return <Lesson initialQuestions={shuffledQuestions} lessonNumber={3} />;
};

export default LessonPage;
