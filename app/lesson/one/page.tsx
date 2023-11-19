'use client'

import React from 'react';
import Lesson, { Question } from '../../../components/Lesson';

const initialQuestions: Question[] = [
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'Hello' in Icelandic?",
      options: ['Halló', 'Bless', 'Takk'],
      correctAnswer: 'Halló',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'My name is Andri' to Icelandic:",
      words: ['heiti', 'halló', 'Ég', 'Takk', 'Andri'],
      correctAnswer: 'Ég heiti Andri',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Goodbye', icelandic: 'Bless' },
        { english: 'Yes', icelandic: 'Já' },
        { english: 'No', icelandic: 'Nei' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'Bye' in Icelandic?",
      options: ['Halló', 'Bless', 'Takk'],
      correctAnswer: 'Bless',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Hello Andri' to Icelandic:",
      words: ['heiti', 'Halló', 'Ég', 'Takk', 'Andri'],
      correctAnswer: 'Halló Andri',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'I', icelandic: 'Ég' },
        { english: 'Bye', icelandic: 'Bless' },
        { english: 'Yes', icelandic: 'Já' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'Thanks' in Icelandic?",
      options: ['Halló', 'Bless', 'Takk'],
      correctAnswer: 'Takk',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'I am Andri' to Icelandic:",
      words: ['heiti', 'halló', 'Ég', 'Takk', 'Andri'],
      correctAnswer: 'Ég heiti Andri',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Hello', icelandic: 'Halló' },
        { english: 'Yes', icelandic: 'Já' },
        { english: 'No', icelandic: 'Nei' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Hello, what is your name?' to Icelandic:",
      words: ['heiti', 'Halló', 'Ég', 'hvað', 'Andri', 'heitir', 'þú'],
      correctAnswer: 'Halló hvað heitir þú',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
];


const LessonPage: React.FC = () => {
  return <Lesson initialQuestions={initialQuestions} />;
};

export default LessonPage;
