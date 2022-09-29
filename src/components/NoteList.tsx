import React, { FC, useState } from 'react';
import { Note } from '../models/Note';
import HeaderList from './HeaderList';
import NoteItem from './NoteItem';
import { DatastoreService } from '../services/datastore.service';
import { NotesService } from '../services/notes.service';
import NoteForm from './NoteForm';
import ModalNote from './ModalNote';

const NoteList: FC = () => {
  const notesService: NotesService = new NotesService(new DatastoreService());
  const [notes, setNotes] = useState<Note[]>(notesService.findAll());
  const [visible, setVisible] = useState<Boolean>(false);

  let emptyNote = {
    id: 0,
    name: 'New note',
    created: new Date(),
    category: { id: 1, name: 'Task' },
    content: '',
    archived: false,
  };
  const [selectedNote, setSelectedNote] = useState<Note>(emptyNote);

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

  function editNote(note: Note): void {}

  return (
    <div className='list-notes__items'>
      <HeaderList />
      {notes.map(
        (note: Note) =>
          !note.archived && (
            <NoteItem
              note={note}
              key={note.id}
              editNote={editNote}
              archivedNote={archivedNote}
              removeNote={removeNote}
            />
          )
      )}
      <ModalNote visible={visible} setVisible={setVisible}>
        <NoteForm title='New note' note={selectedNote} />
      </ModalNote>
    </div>
  );
};

export default NoteList;
