import React, { FC, useState } from 'react';
import { Note } from '../models/Note';
import HeaderList from './HeaderList';
import NoteItem from './NoteItem';
import { DatastoreService } from '../services/datastore.service';
import { NotesService } from '../services/notes.service';

const NoteList: FC = () => {
  const notesService: NotesService = new NotesService(new DatastoreService());
  const [notes, setNotes] = useState<Note[]>(notesService.findAll());

  function updateNote(note: Note): void {
    notesService.update(note.id, note);
    setNotes([...notesService.findAll()]);
  }

  function archivedNote(note: Note): void {
    note.archived = true;
    updateNote(note);
  }

  function removeNote(note: Note): void {
    notesService.remove(note.id);
    setNotes([...notesService.findAll()]);
  }

  return (
    <div className='list-notes__items'>
      <HeaderList />
      {notes.map(
        (note: Note) =>
          !note.archived && <NoteItem note={note} key={note.id} archivedNote={archivedNote} removeNote={removeNote} />
      )}
    </div>
  );
};

export default NoteList;
