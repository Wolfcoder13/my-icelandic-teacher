'use client';

import React from 'react';

const GuideBookPage: React.FC = () => {
  return (
    <div className="bg-gray-700 dark:bg-gray-700 min-h-screen p-6 flex justify-center items-center">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-icelandic-blue mb-4">Third Lesson: Numbers in All Forms</h2>
        <p className="text-gray-800">Welcome to an In-Depth Look at Icelandic Numbers! In this lesson, we're not just learning the basic numbers from 0 to 10; we're diving into their different forms based on gender and their ordinal counterparts. This is crucial in Icelandic as nouns have genders, and numbers often adapt their forms to match.</p>

        <h3 className="text-xl font-semibold text-icelandic-blue mb-2 mt-4">Numbers 0 to 10 in Icelandic: A Comprehensive Guide</h3>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li><strong>Núll</strong> (Zero)</li>
          <li><strong>Einn (kk) / Ein (kvk) / Eitt (hk)</strong> (One)</li>
          <li><strong>Tveir (kk) / Tvær (kvk) / Tvö (hk)</strong> (Two)</li>
          <li><strong>Þrír (kk) / Þrjár (kvk) / Þrjú (hk)</strong> (Three)</li>
          <li><strong>Fjórir (kk) / Fjórar (kvk) / Fjögur (hk)</strong> (Four)</li>
          <li><strong>Fimm</strong> (Five)</li>
          <li><strong>Sex</strong> (Six)</li>
          <li><strong>Sjö</strong> (Seven)</li>
          <li><strong>Átta</strong> (Eight)</li>
          <li><strong>Níu</strong> (Nine)</li>
          <li><strong>Tíu</strong> (Ten)</li>
        </ul>

        <h3 className="text-xl font-semibold text-icelandic-blue mb-2">Ordinal Numbers (Raðtölur)</h3>
        <p className="text-gray-800">Understanding ordinal numbers is also essential as they are frequently used in daily conversations, especially when referring to dates or sequence.</p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li><strong>Fyrsti (kk) / Fyrsta (kvk/hk)</strong> (First)</li>
          <li><strong>Annar (kk) / Önnur (kvk) / Annað (hk)</strong> (Second)</li>
          <li><strong>Þriðji (kk) / Þriðja (kvk/hk)</strong> (Third)</li>
          <li><strong>Fjórði (kk) / Fjórða (kvk/hk)</strong> (Fourth)</li>
          <li><strong>Fimmti (kk) / Fimmta (kvk/hk)</strong> (Fifth)</li>
          <li><strong>Sjötti (kk) / Sjötta (kvk/hk)</strong> (Sixth)</li>
          <li><strong>Sjöundi (kk) / Sjöunda (kvk/hk)</strong> (Seventh)</li>
          <li><strong>Áttundi (kk) / Áttunda (kvk/hk)</strong> (Eighth)</li>
          <li><strong>Níundi (kk) / Níunda (kvk/hk)</strong> (Ninth)</li>
          <li><strong>Tíundi (kk) / Tíunda (kvk/hk)</strong> (Tenth)</li>
        </ul>

        <h3 className="text-xl font-semibold text-icelandic-blue mb-2 mt-4">How to Approach This Lesson:</h3>
        <ol className="list-decimal list-inside mb-4 text-gray-800">
          <li><strong>Learn Each Form</strong>: Pay attention to the gender variations of numbers and their ordinal forms.</li>
          <li><strong>Practice Through Context</strong>: Use the provided exercises to apply these numbers in different sentences and scenarios.</li>
          <li><strong>Listen and Repeat</strong>: Focus on pronunciation to ensure you're not just reading but also speaking these numbers correctly.</li>
        </ol>

        <p className="text-gray-800">Embrace the Challenge! Icelandic numbers offer a unique insight into the language's structure. While it may seem daunting at first, mastering these will significantly enhance your understanding and use of Icelandic.</p>
        <p className="text-gray-800"><strong>Gangi þér vel!</strong> (Good luck!) You're expanding your Icelandic knowledge one number at a time!</p>
      </div>
    </div>
  );
};

export default GuideBookPage;



// 'use client';

// import React from 'react';

// const GuideBookPage: React.FC = () => {
//   return (
//     <div className="bg-gray-700 dark:bg-gray-700 min-h-screen p-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-semibold text-icelandic-blue mb-4">Learning Numbers in Icelandic</h2>
//         <p className="text-gray-800">
//           Welcome to your lesson on numbers in Icelandic! Numbers are essential in any language, and Icelandic is no exception.
//           In this lesson, we&apos;ll focus on the numbers from zero to ten. Understanding these numbers is crucial for daily conversations,
//           whether you&apos;re discussing prices, addresses, or just counting.
//         </p>

//         <h3 className="text-xl font-semibold text-icelandic-blue mt-4 mb-2">The Numbers 0-10</h3>
//         <p className="text-gray-800">
//           Here are the Icelandic numbers from zero to ten:
//         </p>
//         <ul className="list-disc list-inside mb-4 text-gray-800">
//           <li><strong>Núll</strong> - Zero</li>
//           <li><strong>Einn</strong> - One</li>
//           <li><strong>Tveir</strong> - Two</li>
//           <li><strong>Þrír</strong> - Three</li>
//           <li><strong>Fjórir</strong> - Four</li>
//           <li><strong>Fimm</strong> - Five</li>
//           <li><strong>Sex</strong> - Six</li>
//           <li><strong>Sjö</strong> - Seven</li>
//           <li><strong>Átta</strong> - Eight</li>
//           <li><strong>Níu</strong> - Nine</li>
//           <li><strong>Tíu</strong> - Ten</li>
//         </ul>

//         <h3 className="text-xl font-semibold text-icelandic-blue mt-4 mb-2">Using Numbers in Sentences</h3>
//         <p className="text-gray-800">
//           Numbers in Icelandic can be used in various contexts. For instance, when telling your age, asking for quantities,
//           or giving out your phone number. Here are a few examples:
//         </p>
//         <ul className="list-disc list-inside mb-4 text-gray-800 mt-4">
//           <li><strong>Ég er tíu ára.</strong> - I am ten years old.</li>
//           <li><strong>Hann á þrjár bækur.</strong> - He has three books.</li>
//           <li><strong>Er klukkan orðin níu?</strong> - Is it nine o&apos;clock?</li>
//         </ul>
//         <p className="text-gray-800">
//           In the second example you may have noticed that we said &quot;Þrjár&quot; but not &quot;Þrír&quot;. Don&apos;t worry about that now, we will dive into why that is in later lessons.
//         </p>

//         <h3 className="text-xl font-semibold text-icelandic-blue mt-4 mb-2">Practice Makes Perfect</h3>
//         <p className="text-gray-800">
//           As with any new language skill, practice is key. Use the exercises provided in this lesson to familiarize yourself with these numbers.
//           Try counting objects around you, telling the time, or even practicing phone numbers in Icelandic.
//         </p>
//         <p className="text-gray-800 mt-4">
//           Remember, it&apos;s okay to make mistakes. Each error is a step towards mastering Icelandic numbers.
//         </p>
//         <p className="text-gray-800"><strong>Gangi þér vel!</strong> (Good luck!) You&apos;re on your way to becoming comfortable with numbers in Icelandic!</p>
//         <div className='flex justify-between'>
//           <a href='/lesson/three'>
//             <button className="mt-4 bg-icelandic-blue hover:bg-icelandic-blue/90 text-white font-bold py-2 px-4 rounded" >
//               Go to lesson
//             </button>
//           </a>
//           <a href="/">
//             <button className="mt-4 bg-icelandic-blue hover:bg-icelandic-blue/90 text-white font-bold py-2 px-4 rounded" >
//               Go Home
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GuideBookPage;
