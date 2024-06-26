import React from 'react';
import data from "../../../articles.json";
import Article from '../Article/Article';

const ArticleList = () => {
  return (
    <div className='mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]'>
      {data.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          text={article.text}
          tags={article.tags}
          image={article.image}
          alt={article.alt}
        />
      ))}
    </div>
  );
};

export default ArticleList;
