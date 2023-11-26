import { Question } from '../components/Lesson';

export const questionbankLevel1: Question[] = [
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'Hello' in Icelandic?",
      options: ['Halló', 'Bless', 'Takk', 'Já'],
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
        { english: 'No', icelandic: 'Nei' },
        { english: 'Hello', icelandic: 'Komdu sæll' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'Bye' in Icelandic?",
      options: ['Halló', 'Bless', 'Takk', 'Nei'],
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
        { english: 'Goodye', icelandic: 'Bless' },
        { english: 'Yes', icelandic: 'Já' },
        { english: 'Hello', icelandic: 'Halló' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'What' in Icelandic?",
      options: ['Halló', 'Bless', 'Hvað', 'Komdu sæl'],
      correctAnswer: 'Hvað',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'My name is Panpan' to Icelandic:",
      words: ['heiti', 'halló', 'Ég', 'Takk', 'Panpan', 'bless'],
      correctAnswer: 'Ég heiti Panpan',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Hello', icelandic: 'Halló' },
        { english: 'Yes', icelandic: 'Já' },
        { english: 'Goodbye', icelandic: 'Vertu sæll' },
        { english: 'You', icelandic: 'Þú' }
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

export const questionbankLevel2: Question[] = [
  {
    type: 'WordOrder',
    props: {
      question: "What does 'Ég heiti ekki Sveinn' mean in Icelandic?",
      words: ['My', 'name', 'is', 'not', 'Sveinn'],
      correctAnswer: 'My name is not Sveinn',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'His name is Sveinn' to Icelandic:",
      words: ['Hann', 'heitir', 'Sveinn', 'frá', 'íslensku'],
      correctAnswer: 'Hann heitir Sveinn',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'He', icelandic: 'Hann' },
        { english: 'She', icelandic: 'Hún' },
        { english: 'Fun', icelandic: 'Gaman' },
        { english: 'Not', icelandic: 'ekki' },
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'Nice to meet you' in Icelandic?",
      options: ['Gaman að kynnast þér', 'Takk fyrir', 'Skilja ekki'],
      correctAnswer: 'Gaman að kynnast þér',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'She does not understand' to Icelandic:",
      words: ['Hún', 'skilur', 'ekki', 'Hann', 'Kynnast'],
      correctAnswer: 'Hún skilur ekki',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What is 'Thank you' in Icelandic?",
      options: ['Takk', 'Hvaðan', 'Er', 'Þú'],
      correctAnswer: 'Takk',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Where from', icelandic: 'Hvaðan' },
        { english: 'Are', icelandic: 'Er' },
        { english: 'You', icelandic: 'Þú' },
        { english: 'Understand', icelandic: 'Skilja' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'He is from Iceland' to Icelandic:",
      words: ['Hann', 'er', 'frá', 'Íslandi'],
      correctAnswer: 'Hann er frá Íslandi',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What does 'Takk fyrir' mean?",
      options: ['Thank you', 'I don’t understand', 'Where are you from?'],
      correctAnswer: 'Thank you',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Does he understand' to Icelandic:",
      words: ['Skilur', 'hann', 'að', 'gaman', 'hún', 'takk', 'frá'],
      correctAnswer: 'Skilur hann',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "Choose the Icelandic translation for 'She understands.'",
      options: ['Hann skilur', 'Hún skilur', 'Þau skilja', 'Ég skil'],
      correctAnswer: 'Hún skilur',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "His name is Bjarni, not Árni' to Icelandic:",
      words: ['Hann', 'heitir', 'Bjarni', 'ekki', 'Árni', 'Hún', 'Takk'],
      correctAnswer: 'Hann heitir Bjarni ekki Árni',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'I', icelandic: 'Ég' },
        { english: 'To understand', icelandic: 'Að skilja' },
        { english: 'No', icelandic: 'Nei' },
        { english: 'Takk', icelandic: 'Thanks' },
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "What does 'Hvaðan ert þú?' mean?",
      options: ['Where are you from?', 'What are you doing?', 'How are you?', 'Who are you?'],
      correctAnswer: 'Where are you from?',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Where is he from?' to Icelandic:",
      words: ['Hvaðan', 'er', 'hann', 'Kynnast'],
      correctAnswer: 'Hvaðan er hann',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'I don’t understand' in Icelandic?",
      options: ['Ég skil ekki', 'Ég er hamingjusamur', 'Ég er frá Íslandi', 'Takk fyrir'],
      correctAnswer: 'Ég skil ekki',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Yes', icelandic: 'Já' },
        { english: 'To meet', icelandic: 'Að kynnast' },
        { english: 'He', icelandic: 'Hann' },
        { english: 'She', icelandic: 'Hún' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Do you understand Icelandic' to Icelandic:",
      words: ['Skilur', 'þú', 'íslensku', 'læra', 'að',],
      correctAnswer: 'Skilur þú íslensku',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "Choose the correct translation for 'She is from France.'",
      options: ['Hún er frá Frakklandi', 'Hann er frá Frakklandi', 'Þau eru frá Frakklandi'],
      correctAnswer: 'Hún er frá Frakklandi',
      onAnswer: (_, __) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'He', icelandic: 'Hann' },
        { english: 'To meet', icelandic: 'Kynnast' },
        { english: 'Not', icelandic: 'Ekki' },
        { english: 'Where from', icelandic: 'Hvaðan' }
      ],
      onAnswer: (_: any) => { console.log('This should never be used or run, just here to fulfil the interface.') }
    }
  },
];

export const questionbankLevel3: Question[] = [
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