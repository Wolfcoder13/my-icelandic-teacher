'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface LessonCardProps {
  href: string;
  notesLink: string;
  title: string;
  text: string;
  svg: JSX.Element;
}

const LessonCard: React.FC<LessonCardProps> = ({ href, notesLink, title, text, svg }) => {
  // const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or loading indicator
  }

  const handleCardClick = () => {
    // router.push(href);
    console.log('click card')

  };

  const handleNotesClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation(); 
    // Prevents the card click event
    // router.push(notesLink);
    console.log('click note')
  };

  return (
    <a className="transition-all duration-1000 bg-white hover:bg-icelandic-blue hover:shadow-xl m-2 p-4 relative z-40 group" href={href}>
      <div
        className="absolute bg-icelandic-red top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2">
      </div>
      <div className="py-2 px-9 relative">
        <div className="flex items-center justify-between">
          {svg}
          <a href={notesLink} className="border border-icelandic-blue hover:border-white rounded p-3 bg-white hover:bg-icelandic-blue group/notepad">
            <svg className="w-6 h-6 fill-icelandic-blue group-hover/notepad:fill-white" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 97.25 122.88">
              <path
                d="M9.28,8.23h8.55V2.85a2.86,2.86,0,0,1,5.71,0V8.23H36.09V2.85a2.85,2.85,0,0,1,5.7,0V8.23H54.34V2.85a2.86,2.86,0,0,1,5.71,0V8.23H72.6V2.85a2.85,2.85,0,1,1,5.7,0V8.23H88a9.29,9.29,0,0,1,9.27,9.28V113.6A9.32,9.32,0,0,1,88,122.88H9.28A9.3,9.3,0,0,1,0,113.6V17.51A9.29,9.29,0,0,1,9.28,8.23Zm12,90.31a2.77,2.77,0,0,1,0-5.54H76a2.77,2.77,0,0,1,0,5.54Zm0-18.26a2.77,2.77,0,0,1,0-5.53H76a2.77,2.77,0,0,1,0,5.53Zm0-18.25a2.77,2.77,0,0,1,0-5.54H76A2.77,2.77,0,0,1,76,62Zm0-18.26a2.77,2.77,0,0,1,0-5.53H76a2.77,2.77,0,0,1,0,5.53Zm57.06-30v5.38a2.85,2.85,0,1,1-5.7,0V13.76H60.05v5.38a2.86,2.86,0,0,1-5.71,0V13.76H41.79v5.38a2.85,2.85,0,0,1-5.7,0V13.76H23.54v5.38a2.86,2.86,0,0,1-5.71,0V13.76H9.28a3.7,3.7,0,0,0-2.64,1.1,3.75,3.75,0,0,0-1.11,2.65V113.6a3.79,3.79,0,0,0,3.75,3.75H88a3.76,3.76,0,0,0,3.74-3.75V17.51A3.76,3.76,0,0,0,88,13.76Z" />
            </svg>
          </a>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">{title}</h3>
        <p className="mt-4 text-base text-gray-600 group-hover:text-white">
          {text}
        </p>
      </div>
    </a>
  );
};

export default LessonCard;
