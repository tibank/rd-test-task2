import React, { useState } from 'react';
import './styles/App.css';
import NoteList from './components/NoteList';
import CategoriesList from './components/CategoriesList';

function App() {
  return (
    <div className='App'>
      <NoteList />
      <CategoriesList />
    </div>
  );
}

export default App;
