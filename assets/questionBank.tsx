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
      question: "How do you say 'zero' in Icelandic?",
      options: ['Núll', 'Einn', 'Tveir', 'Þrír'],
      correctAnswer: 'Núll',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'one' in Icelandic?",
      options: ['Fjórir', 'Einn', 'Fimm', 'Sex'],
      correctAnswer: 'Einn',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'two' in Icelandic?",
      options: ['Átta', 'Sjö', 'Tveir', 'Níu'],
      correctAnswer: 'Tveir',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'three' in Icelandic?",
      options: ['Þrír', 'Tíu', 'Fimm', 'Einn'],
      correctAnswer: 'Þrír',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'four' in Icelandic?",
      options: ['Fjórir', 'Sex', 'Sjö', 'Tveir'],
      correctAnswer: 'Fjórir',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'five' in Icelandic?",
      options: ['Einn', 'Fimm', 'Núll', 'Þrír'],
      correctAnswer: 'Fimm',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'six' in Icelandic?",
      options: ['Sex', 'Tíu', 'Fjórir', 'Einn'],
      correctAnswer: 'Sex',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'seven' in Icelandic?",
      options: ['Sjö', 'Tveir', 'Fimm', 'Níu'],
      correctAnswer: 'Sjö',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'eight' in Icelandic?",
      options: ['Átta', 'Sex', 'Einn', 'Þrír'],
      correctAnswer: 'Átta',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'nine' in Icelandic?",
      options: ['Níu', 'Fjórir', 'Sjö', 'Tveir'],
      correctAnswer: 'Níu',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'MultipleChoice',
    props: {
      question: "How do you say 'ten' in Icelandic?",
      options: ['Tíu', 'Fimm', 'Einn', 'Sex'],
      correctAnswer: 'Tíu',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Zero', icelandic: 'Núll' },
        { english: 'One', icelandic: 'Einn' },
        { english: 'Two', icelandic: 'Tveir' },
        { english: 'Three', icelandic: 'Þrír' }
      ],
      onAnswer: (_: any) => { /* Function implementation */ }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Four', icelandic: 'Fjórir' },
        { english: 'Five', icelandic: 'Fimm' },
        { english: 'Six', icelandic: 'Sex' },
        { english: 'Seven', icelandic: 'Sjö' }
      ],
      onAnswer: (_: any) => { /* Function implementation */ }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Eight', icelandic: 'Átta' },
        { english: 'Nine', icelandic: 'Níu' },
        { english: 'Ten', icelandic: 'Tíu' },
        { english: 'Zero', icelandic: 'Núll' }
      ],
      onAnswer: (_: any) => { /* Function implementation */ }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'One', icelandic: 'Einn' },
        { english: 'Two', icelandic: 'Tveir' },
        { english: 'Three', icelandic: 'Þrír' },
        { english: 'Four', icelandic: 'Fjórir' }
      ],
      onAnswer: (_: any) => { /* Function implementation */ }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Five', icelandic: 'Fimm' },
        { english: 'Six', icelandic: 'Sex' },
        { english: 'Seven', icelandic: 'Sjö' },
        { english: 'Eight', icelandic: 'Átta' }
      ],
      onAnswer: (_: any) => { /* Function implementation */ }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Nine', icelandic: 'Níu' },
        { english: 'Ten', icelandic: 'Tíu' },
        { english: 'Zero', icelandic: 'Núll' },
        { english: 'One', icelandic: 'Einn' }
      ],
      onAnswer: (_: any) => { /* Function implementation */ }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Two', icelandic: 'Tveir' },
        { english: 'Three', icelandic: 'Þrír' },
        { english: 'Four', icelandic: 'Fjórir' },
        { english: 'Five', icelandic: 'Fimm' }
      ],
      onAnswer: (_: any) => { /* Function implementation */ }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Six', icelandic: 'Sex' },
        { english: 'Seven', icelandic: 'Sjö' },
        { english: 'Eight', icelandic: 'Átta' },
        { english: 'Nine', icelandic: 'Níu' }
      ],
      onAnswer: (_: any) => { /* Function implementation */ }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Ten', icelandic: 'Tíu' },
        { english: 'Zero', icelandic: 'Núll' },
        { english: 'One', icelandic: 'Einn' },
        { english: 'Two', icelandic: 'Tveir' }
      ],
      onAnswer: (_: any) => { /* Function implementation */ }
    }
  },
  {
    type: 'Matching',
    props: {
      pairs: [
        { english: 'Three', icelandic: 'Þrír' },
        { english: 'Four', icelandic: 'Fjórir' },
        { english: 'Five', icelandic: 'Fimm' },
        { english: 'Six', icelandic: 'Sex' }
      ],
      onAnswer: (_: any) => { /* Function implementation */ }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'He is seven years old' to Icelandic.",
      words: ['Ég', 'er', 'sjö', 'ára'],
      correctAnswer: 'Hann er sjö ára',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'She has three dogs' to Icelandic.",
      words: ['Hún', 'hefur', 'þrjá', 'hunda'],
      correctAnswer: 'Hún hefur þrjá hunda',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  },
  {
    type: 'WordOrder',
    props: {
      question: "Translate 'Ten birds are flying' to Icelandic.",
      words: ['Tíu', 'fuglar', 'eru', 'að', 'fljúga'],
      correctAnswer: 'Tíu fuglar eru að fljúga',
      onAnswer: (_, __) => { /* Function implementation */ }
    }
  }
];


