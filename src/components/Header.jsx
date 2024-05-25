import React from 'react';
import ToggleTheme from './ToggleTheme/ToggleTheme';

function Header({ user }) {
  return (
    <div className='flex h-20 bg-alura-200 bg-dark-200 justify-between items-center p-5 sm:rounded-xl sm:m-5'>
      <span className='text-gray-100'>Olá, {user?.nome || 'Usuário'}</span>
      <h1 className='text-gray-100 text-xl sm:hover:text-2xl'>Alura Newsletter</h1>
      <ToggleTheme />
    </div>
  );
}

export default Header;
