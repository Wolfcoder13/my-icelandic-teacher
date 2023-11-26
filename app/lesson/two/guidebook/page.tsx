'use client';

import React from 'react';

const GuideBookPage: React.FC = () => {
  return (
    <div className="bg-gray-700 min-h-screen p-6">
      <div className="bg-gray-100 max-w-lg mx-auto p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-icelandic-blue mb-4">Second Lesson</h2>
        <p className="text-gray-800">In your second lesson, we delve deeper into Icelandic by focusing on more interactive words and phrases. This lesson will help you engage in basic conversations, understand common expressions, and get a glimpse into the nuances of Icelandic pronouns and verbs.</p>

        <h3 className="text-xl font-semibold text-icelandic-blue mb-2 mt-4">Key Words and Phrases:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li><strong>Ég, mig, mér, mín</strong> (I, me, to me, my): Different forms of the pronoun &apos;I&apos; used depending on the sentence structure.</li>
          <li><strong>Þú, þig, þér, þín</strong> (You, you, to you, your): These are variations of &apos;you&apos;, used in different contexts in Icelandic.</li>
          <li><strong>Hann, Hún</strong> (He, She): The Icelandic words for &apos;he&apos; and &apos;she&apos;.</li>
          <li><strong>Gaman</strong> (Fun): Used to express enjoyment or fun.</li>
          <li><strong>að Kynnast</strong> (To meet): Used when meeting someone for the first time.</li>
          <li><strong>Takk, Takk fyrir</strong> (Thanks, Thank you): Expressions of gratitude.</li>
          <li><strong>Skilja, ekki</strong> (To understand, not): &apos;Skilja&apos; means to understand, and &apos;ekki&apos; negates it.</li>
          <li><strong>Hvaðan, Er/Ert</strong> (Where from, Is/Are): &apos;Hvaðan&apos; is used for asking about origin, and &apos;Er/Ert&apos; are forms of the verb &apos;to be&apos;.</li>
          <li><strong>Frá</strong> (From): Used to indicate the origin or source.</li>
        </ul>

        <p className="text-gray-800">This lesson also introduces the concept of gendered language in Icelandic. Pronouns and adjectives change form based on gender. For example, &apos;Hann&apos; (He) and &apos;Hún&apos; (She) are masculine and feminine forms respectively.</p>

        <p className="text-gray-800 mt-4">Another interesting aspect of Icelandic is the structure of sentences, particularly in questions. Typically, the verb precedes the subject in questions (e.g., &apos;Skilur þú?&apos; - &apos;Do you understand?&apos;), whereas in statements, the subject comes first (e.g., &apos;Þú skilur&apos; - &apos;You understand&apos;).</p>

        <h3 className="text-xl font-semibold text-icelandic-blue mb-2 mt-4">Approaching This Lesson:</h3>
        <ol className="list-decimal list-inside mb-4 text-gray-800">
          <li><strong>Focus on Pronouns and Verbs</strong>: Pay attention to how pronouns and verbs change in different sentences.</li>
          <li><strong>Practice Sentence Structure</strong>: Try forming questions and statements to understand the order of words.</li>
          <li><strong>Use Common Phrases</strong>: Practice using common phrases like &apos;Gaman að kynnast þér&apos; (Nice to meet you) in conversations.</li>
          <li><strong>Engage with the Questions</strong>: The provided questions are designed to test your understanding of these concepts.</li>
        </ol>

        <p className="text-gray-800">As always, repetition and practice are key. Don&apos;t hesitate to revisit previous lessons to strengthen your foundation. Áfram! (Onward!)</p>
        <div className='flex justify-between'>
          <a href='/lesson/two'>
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
