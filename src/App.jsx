import React, { useState } from 'react';
import './App.css';
import ArticleList from './components/ArticleList/ArticleList';
import Header from './components/Header';
import './input.css';
import Form from './components/Form/Form';

function App() {
  const [user, setUser] = useState(null);
  const hasUser = Boolean(user);

  return (
    <div className='h-screen'>
      <Header user={user} />  {/* Passando user como prop */}
      {hasUser ? <ArticleList /> : <Form onSubmit={setUser} />}
    </div>
  );
}

export default App;
