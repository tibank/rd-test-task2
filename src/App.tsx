import React, { useState } from 'react';
import './styles/App.css';
import NoteList from './components/NoteList';
import CategoriesList from './components/CategoriesList';
import { NotesService } from './services/notes.service';
import { DatastoreService } from './services/datastore.service';
import { StatNotes } from './models/statCategories';

function App() {
  const notesService: NotesService = new NotesService(new DatastoreService());
  const [statNote, setStatNotes] = useState<StatNotes[]>(notesService.getStat());

  return (
    <div className='App'>
      <NoteList notesService={notesService} setStatNotes={setStatNotes} />
      <CategoriesList statNote={statNote} />
    </div>
  );
}

export default App;
