'use client'

import React from 'react';
import Lesson, { Question } from '../../../components/Lesson';

const initialQuestions: Question[] = [
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'Good night' in Icelandic?",
      options: ['Góðan daginn', 'Góða nótt', 'Gott kvöld'],
      correctAnswer: 'Góða nótt',
      onAnswer: (_, __) => {}
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'I need help' to Icelandic:",
      words: ['Ég', 'þarf', 'hjálp'],
      correctAnswer: 'Ég þarf hjálp',
      onAnswer: (_, __) => {}
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
      onAnswer: (_, __) => {}
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What does 'Hvernig hefur þú það?' mean?",
      options: ['How are you?', 'What is your name?', 'Where are you from?'],
      correctAnswer: 'How are you?',
      onAnswer: (_, __) => {}
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'The cat sleeps on the chair' to Icelandic:",
      words: ['Kötturinn', 'sefur', 'á', 'stólnum'],
      correctAnswer: 'Kötturinn sefur á stólnum',
      onAnswer: (_, __) => {}
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
      onAnswer: (_, __) => {}
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "Which phrase means 'See you later' in Icelandic?",
      options: ['Sjáumst síðar', 'Góðan dag', 'Takk fyrir'],
      correctAnswer: 'Sjáumst síðar',
      onAnswer: (_, __) => {}
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'It is sunny today' to Icelandic:",
      words: ['Það', 'er', 'sólríkt', 'í', 'dag'],
      correctAnswer: 'Það er sólríkt í dag',
      onAnswer: (_, __) => {}
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
      onAnswer: (_, __) => {}
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'I am happy' in Icelandic?",
      options: ['Ég er hamingjusamur', 'Ég er þreyttur', 'Ég er sorgmæddur'],
      correctAnswer: 'Ég er hamingjusamur',
      onAnswer: (_, __) => {}
    }
  }
];


const LessonPage: React.FC = () => {
  return <Lesson initialQuestions={initialQuestions} />;
};

export default LessonPage;
