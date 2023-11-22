'use client'

import React, { useEffect, useState } from 'react';
import Lesson, { Question } from '../../../components/Lesson';
import { shuffleArray } from '@/utils/arrayUtils';
import { questionbankLevel2 } from '../../../assets/questionBank'


const LessonPage: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Shuffle the questions and store in state
    const shuffled = shuffleArray(questionbankLevel2).slice(0, 10);
    setShuffledQuestions(shuffled);
  }, []);

  return <Lesson initialQuestions={shuffledQuestions} lessonNumber={2} />;
};

export default LessonPage;
