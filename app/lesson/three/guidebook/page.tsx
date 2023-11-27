'use client';

import React from 'react';

const GuideBookPage: React.FC = () => {
  return (
    <div className="bg-gray-700 dark:bg-gray-700 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-icelandic-blue mb-4">Learning Numbers in Icelandic</h2>
        <p className="text-gray-800">
          Welcome to your lesson on numbers in Icelandic! Numbers are essential in any language, and Icelandic is no exception.
          In this lesson, we&apos;ll focus on the numbers from zero to ten. Understanding these numbers is crucial for daily conversations,
          whether you&apos;re discussing prices, addresses, or just counting.
        </p>

        <h3 className="text-xl font-semibold text-icelandic-blue mt-4 mb-2">The Numbers 0-10</h3>
        <p className="text-gray-800">
          Here are the Icelandic numbers from zero to ten:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li><strong>Núll</strong> - Zero</li>
          <li><strong>Einn</strong> - One</li>
          <li><strong>Tveir</strong> - Two</li>
          <li><strong>Þrír</strong> - Three</li>
          <li><strong>Fjórir</strong> - Four</li>
          <li><strong>Fimm</strong> - Five</li>
          <li><strong>Sex</strong> - Six</li>
          <li><strong>Sjö</strong> - Seven</li>
          <li><strong>Átta</strong> - Eight</li>
          <li><strong>Níu</strong> - Nine</li>
          <li><strong>Tíu</strong> - Ten</li>
        </ul>

        <h3 className="text-xl font-semibold text-icelandic-blue mt-4 mb-2">Using Numbers in Sentences</h3>
        <p className="text-gray-800">
          Numbers in Icelandic can be used in various contexts. For instance, when telling your age, asking for quantities,
          or giving out your phone number. Here are a few examples:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-800 mt-4">
          <li><strong>Ég er tíu ára.</strong> - I am ten years old.</li>
          <li><strong>Hann á þrjár bækur.</strong> - He has three books.</li>
          <li><strong>Er klukkan orðin níu?</strong> - Is it nine o&apos;clock?</li>
        </ul>
        <p className="text-gray-800">
          In the second example you may have noticed that we said &quot;Þrjár&quot; but not &quot;Þrír&quot;. Don&apos;t worry about that now, we will dive into why that is in later lessons.
        </p>

        <h3 className="text-xl font-semibold text-icelandic-blue mt-4 mb-2">Practice Makes Perfect</h3>
        <p className="text-gray-800">
          As with any new language skill, practice is key. Use the exercises provided in this lesson to familiarize yourself with these numbers.
          Try counting objects around you, telling the time, or even practicing phone numbers in Icelandic.
        </p>
        <p className="text-gray-800 mt-4">
          Remember, it&apos;s okay to make mistakes. Each error is a step towards mastering Icelandic numbers.
        </p>
        <p className="text-gray-800"><strong>Gangi þér vel!</strong> (Good luck!) You&apos;re on your way to becoming comfortable with numbers in Icelandic!</p>
        <div className='flex justify-between'>
          <a href='/lesson/three'>
            <button className="mt-4 bg-icelandic-blue hover:bg-icelandic-blue/90 text-white font-bold py-2 px-4 rounded" >
              Go to lesson
            </button>
          </a>
          <a href="/">
            <button className="mt-4 bg-icelandic-blue hover:bg-icelandic-blue/90 text-white font-bold py-2 px-4 rounded" >
              Go Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GuideBookPage;
