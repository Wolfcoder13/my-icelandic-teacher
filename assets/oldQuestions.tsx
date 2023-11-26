import { Question } from '../components/Lesson';

export const questionbankLevel2OLD: Question[] = [
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'Goodbye' in Icelandic?",
      options: ['Halló', 'Bless', 'Takk'],
      correctAnswer: 'Bless',
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
        { english: 'Yes', icelandic: 'Já' },
        { english: 'Hello', icelandic: 'Halló' },
        { english: 'No', icelandic: 'Nei' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What does 'Góðan daginn' mean in English?",
      options: ['Good night', 'Good evening', 'Good day'],
      correctAnswer: 'Good day',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Komdu sæll, hvað heitir þú?' to English:",
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
      options: ['Ég skil ekki', 'Ég er frá', 'Ég veit'],
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
      pairs: [
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
      words: ['Talar', 'þú', 'ensku', 'segir', 'halló'],
      correctAnswer: 'Talar þú ensku',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "What is 'You are welcome' in Icelandic?",
      words: ['Verði', 'þér', 'að', 'góðu', 'takk', 'bless', 'þú'],
      correctAnswer: 'Verði þér að góðu',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Thank you. What is your name?' to Icelandic:",
      words: ['heiti', 'halló', 'Ég', 'Takk', 'Andri', 'hvað', 'heitir', 'þú'],
      correctAnswer: 'Takk hvað heitir þú',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Please', icelandic: 'Vinsamlegast' },
        { english: 'Hello', icelandic: 'Halló' },
        { english: 'Yes', icelandic: 'Já' },
        { english: 'Bye', icelandic: 'Bless' },
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What does 'Góðan nótt' mean in English?",
      options: ['Good night', 'Good morning', 'Good day'],
      correctAnswer: 'Good night',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Halló Pan' to English:",
      words: ['name', 'Hello', 'my', 'Takk', 'is', 'Pan'],
      correctAnswer: 'Hello Pan',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Good', icelandic: 'Góður' },
        { english: 'Night', icelandic: 'Nótt' },
        { english: 'Day', icelandic: 'Dagur' },
        { english: 'Evening', icelandic: 'Kvöld' },
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'I do not understand' in Icelandic?",
      options: ['Ég skil ekki', 'Ég er frá', 'Ég veit'],
      correctAnswer: 'Ég skil ekki',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'I can help you' to Icelandic:",
      words: ['Ég', 'get', 'hjálpað', 'þér', 'mér', 'Getur', 'þú', 'að'],
      correctAnswer: 'Ég get hjálpað þér',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Help', icelandic: 'Hjálp' },
        { english: 'Understand', icelandic: 'Skilja' },
        { english: 'You', icelandic: 'Þú' },
        { english: 'I', icelandic: 'Ég' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Do you speak Icelandic?' to Icelandic:",
      words: ['Talar', 'þú', 'ensku', 'segir', 'halló', 'íslensku'],
      correctAnswer: 'Talar þú íslensku',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
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
      words: ['er', 'halló', 'Ég', 'Takk', 'Andri'],
      correctAnswer: 'Ég er Andri',
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
