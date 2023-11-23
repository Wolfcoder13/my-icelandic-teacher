'use client';

import React from 'react';

const GuideBookPage: React.FC = () => {
  return (
    <div className="bg-gray-700 dark:bg-gray-700 min-h-screen p-6 flex justify-center items-center">
      <div className="bg-white max-w-lg w-full rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-icelandic-blue mb-4">Second Lesson</h2>
        <p className="text-gray-800">TODO.</p>

        <div className='flex justify-between'>
          <a href='/lesson/one'>
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
