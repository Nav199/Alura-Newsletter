import React from 'react';

const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className='p-5 gap-2 bg-gray-100 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center sm:hover:shadow-gray-500 sm:hover:shadow-lg'>
      <h3 className='text-xl text-alura-200 dark:text-gray-200 font-bold text-center'>{title}</h3>
      {tags && (
        <div className=' w-full flex flex-row justify-end gap-2 pr-5 hidden sm:flex text-center'>
          {tags.map((tag, index) => (
            <span key={index} className=" bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full dark:text-gray-400 text-xs font-bold uppercase tag hover:bg-alura-200 hover:scale-110">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className='grid gap-1'>
        {text.map((content, index) => (
          <p key={index} className='text-alura-200 dark:text-gray-100'>{content}</p>
        ))}
      </div>
      {image && <img className='sm:p-4' src={image}/>}
      {image && alt && <span className='sr-only' >{alt}</span>}
    </div>
  );
};

export default Article;
