import React, { FC, useState } from 'react';
import './styles/App.css';
import NoteList from './components/NoteList';
import CategoriesList from './components/CategoriesList';
import { NotesService } from './services/notes.service';
import { StatNotes } from './models/statCategories';

type NoteListProps = {
  notesService: NotesService;
};

const App: FC<NoteListProps> = ({ notesService }) => {
  const [statNote, setStatNotes] = useState<StatNotes[]>(notesService.getStat());

  return (
    <div className='App'>
      <NoteList notesService={notesService} setStatNotes={setStatNotes} />
      <CategoriesList statNote={statNote} />
    </div>
  );
};

export default App;
