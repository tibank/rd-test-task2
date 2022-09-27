import React, { useState } from 'react';
import './styles/App.css';
import HeaderList from './components/HeaderList';
import NoteList from './components/NoteList';
import HeaderCategories from './components/HeaderCategories';
import { Note } from './models/Note';

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      name: 'Homework',
      created: new Date(2022, 3, 10),
      category: { id: 1, name: 'Task' },
      content: 'I have to do homework till  15/04/2022',
      archived: false,
    },
    {
      id: 2,
      name: 'About main',
      created: new Date(2022, 3, 10),
      category: { id: 3, name: 'Random Thought' },
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      archived: false,
    },
    {
      id: 3,
      name: 'Take book',
      created: new Date(2022, 3, 11),
      category: { id: 1, name: 'Task' },
      content: 'I have to pick up the book from John tomorrow',
      archived: false,
    },
  ]);

  return (
    <div className='App'>
      <HeaderList />
      <NoteList notes={notes} />
      <HeaderCategories />
    </div>
  );
}

export default App;
