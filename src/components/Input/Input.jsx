import React from 'react';

const Input = (props) => {
  return (
    <input
      className="py-1 pl-5 w-full max-w-lg dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus: border-2 focus:border-alura-200 focus: border-alura-100 invalid:border-2 invalid:focus:border-red-400"
      {...props}
    />
  );
};

export default Input;
