import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Note } from '../models/Note';
import HeaderList from './HeaderList';
import NoteItem from './NoteItem';
import { NotesService } from '../services/notes.service';
import NoteForm from './NoteForm';
import ModalNote from './ModalNote';
import { StatNotes } from '../models/statCategories';

type NoteListProps = {
  notesService: NotesService;
  setStatNotes: Dispatch<SetStateAction<StatNotes[]>>;
};

const NoteList: FC<NoteListProps> = ({ notesService, setStatNotes }) => {
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

  function refreshLists() {
    setNotes([...notesService.findAll()]);
    setStatNotes([...notesService.getStat()]);
    setSelectedNote(emptyNote);
  }

  function updateNote(note: Note): void {
    notesService.update(note.id, note);
    refreshLists();
  }

  function addNote(note: Note) {
    notesService.create(note);
    refreshLists();
  }

  function createNote(): void {
    setSelectedNote(emptyNote);
    setVisible(true);
  }

  function editNote(note: Note): void {
    console.log(note);
    console.log(note.name);
    console.log(notesService.findAll());
    setSelectedNote(note);
    setVisible(true);
  }

  function archivedNote(note: Note): void {
    console.log(note);
    console.log(note.name);
    console.log(notesService.findAll());
    note.archived = true;
    updateNote(note);
  }

  function removeNote(note: Note): void {
    console.log(note);
    console.log(note.name);
    console.log(notesService.findAll());
    notesService.remove(note.id);
    refreshLists();
  }

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
              setStatNotes={setStatNotes}
            />
          )
      )}
      <div className='create-note__button'>
        <button className='notes__btn' id='create-note__btn' onClick={() => createNote()}>
          Create note
        </button>
      </div>
      <ModalNote visible={visible} setVisible={setVisible}>
        {visible && (
          <NoteForm
            note={selectedNote}
            setVisible={setVisible}
            addNote={addNote}
            updateNote={updateNote}
            notesService={notesService}
          />
        )}
      </ModalNote>
    </div>
  );
};

export default NoteList;
