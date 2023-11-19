'use client'

import React from 'react';
import Lesson, { Question } from '../../../components/Lesson';

const initialQuestions: Question[] = [
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'Thank you' in Icelandic?",
      options: ['Halló', 'Bless', 'Takk'],
      correctAnswer: 'Takk',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Thank you. My name is Andri' to Icelandic:",
      words: ['heiti', 'halló', 'Ég', 'Takk', 'Andri'],
      correctAnswer: 'Takk Ég heiti Andri',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Please', icelandic: 'Vinsamlegast' },
        { english: 'Hello', icelandic: 'Halló' },
        { english: 'No', icelandic: 'Nei' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What does 'Góðan dag' mean in English?",
      options: ['Good night', 'Good morning', 'Good day'],
      correctAnswer: 'Good day',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Halló Andri' to English:",
      words: ['name', 'Hello', 'my', 'Takk', 'is', 'Andri'],
      correctAnswer: 'Hello Andri',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Morning', icelandic: 'Morgunn' },
        { english: 'Night', icelandic: 'Nótt' },
        { english: 'Day', icelandic: 'Dagur' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'I do not understand' in Icelandic?",
      options:  ['Ég skil ekki', 'Ég er frá', 'Ég veit'],
      correctAnswer: 'Ég skil ekki',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Can you help me?' to Icelandic:",
      words: ['hjálpað', 'mér', 'Getur', 'þú', 'að'],
      correctAnswer: 'Getur þú hjálpað mér',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs:  [
        { english: 'Help', icelandic: 'Hjálp' },
        { english: 'Understand', icelandic: 'Skilja' },
        { english: 'Speak', icelandic: 'Tala' }
        ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Do you speak English?' to Icelandic:",
      words: ['Talar', 'þú', 'ensku', 'segir'],
      correctAnswer: 'Talar þú ensku',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
];



const LessonPage: React.FC = () => {
  return <Lesson initialQuestions={initialQuestions} lessonNumber={2} />;
};

export default LessonPage;
