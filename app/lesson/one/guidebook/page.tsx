'use client';

import React from 'react';

const GuideBookPage: React.FC = () => {
  return (
    <div className="bg-gray-700 dark:bg-gray-700 min-h-screen p-6 flex justify-center items-center">
      <div className="bg-white max-w-lg w-full rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-icelandic-blue mb-4">Fyrsta Lesson (First Lesson)</h2>
        <p className="text-gray-800">Welcome to your first lesson in Icelandic! This journey starts with some simple yet essential words and phrases that will lay the foundation for your Icelandic language skills.</p>
        <p className="text-gray-800 mt-4">In this lesson, our focus will be on introducing you to basic but crucial Icelandic words. By the end of this lesson, you will be familiar with greetings, and how to introduce yourself in Icelandic. Let&apos;s dive into the words we will cover:</p>

        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li><strong>Ég</strong> (I): The foundation of many sentences, &quot;Ég&quot; is how you refer to yourself.</li>
          <li><strong>Þú</strong> (You): This is how you address someone else in a conversation.</li>
          <li><strong>Hvað</strong> (What): A key question word to begin inquiries.</li>
          <li><strong>Heitir</strong> (Called/Name): Often used in introductions to ask or tell someone&apos;s name.</li>
          <li><strong>Góðan daginn</strong> (Good day): A common greeting used during the daytime.</li>
          <li><strong>Halló</strong> (Hello): A universal greeting to catch someone’s attention or start a conversation.</li>
          <li><strong>Komdu sæll / Komdu sæl</strong> (Be welcome - male/female): A respectful greeting, reflecting the gender of the person you are addressing.</li>
          <li><strong>Vertu sæll / Vertu sæl</strong> (Be well - male/female): A polite way to wish someone well, again reflective of the person&apos;s gender.</li>
          <li><strong>Bless</strong> (Goodbye): A simple and common way to bid someone farewell.</li>
        </ul>

        <p className="text-gray-800">In this lesson, we have 10 carefully crafted questions to test your understanding of these words. These questions are designed to reinforce your learning and help you get comfortable with using these words in different contexts. They are set in a specific order to guide you smoothly through the learning process.</p>

        <h3 className="text-xl font-semibold text-icelandic-blue mb-2 mt-4">How to Approach This Lesson:</h3>
        <ol className="list-decimal list-inside mb-4 text-gray-800">
          <li><strong>Read and Listen</strong>: Go through each word and phrase. Listen to their pronunciation and try to mimic them.</li>
          <li><strong>Understand the Context</strong>: Understand when and how each word is used in daily conversation.</li>
          <li><strong>Practice</strong>: Utilize the questions provided to practice these words. Don&apos;t worry about making mistakes; they are part of the learning process.</li>
          <li><strong>Repeat</strong>: Repetition is key in language learning. Go over the words multiple times until you feel comfortable with them.</li>
        </ol>

        <p className="text-gray-800">As you embark on this exciting journey to learn Icelandic, remember that patience and practice are your best tools. Enjoy the process, and take pride in every new word and phrase you learn.</p>
        <p className="text-gray-800"><strong>Til hamingju!</strong> (Congratulations!) You&apos;re on your way to speaking Icelandic!</p>
      </div>
    </div>
  );
};

export default GuideBookPage;
