import React from 'react';
import Input from '../Input/Input';

const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const nome = event.target.elements.nome.value;
    const email = event.target.elements.email.value;
    onSubmit({ nome, email });
  };

  return (
    <form onSubmit={safeSubmit} className='-mt-20 gap-10 h-full flex flex-col items-center justify-center'>
      <Input type="text" name="nome" required placeholder="Insira seu nome..." />
      <Input type="email" name="email" required placeholder="Insira seu e-mail..." />
      <button type="submit" className='max-w-sm py-1 px-5 uppercase rounded-full bg-alura-100 dark:bg-dark-200 text-dark-100 dark:text-gray-100 outline-none'>
        Seguir
      </button>
    </form>
  );
};

export default Form;
