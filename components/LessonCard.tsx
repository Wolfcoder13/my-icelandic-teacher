import React from 'react'

interface LessonCardProps {
  href: string;
  title: string;
  text: string;
  svg: JSX.Element;
}

const LessonCard: React.FC<LessonCardProps> = ({ href, title, text, svg }) => {
  return (
    <a href={href}
      className="transition-all  duration-1000 bg-white hover:bg-icelandic-blue  hover:shadow-xl m-2 p-4 relative z-40 group  ">
      <div
        className=" absolute  bg-icelandic-blue top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
      </div>
      <div className="py-2 px-9 relative  ">
        {svg}
        <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">{title}</h3>
        <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">
          {text}
        </p>
      </div>
    </a>
  );
};

export default LessonCard;