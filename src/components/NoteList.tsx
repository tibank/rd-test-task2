import React, { FC, useState } from 'react';
import { Note } from '../models/Note';
import NoteItem from './NoteItem';

type NoteListProps = {
  notes: Note[];
};

const NoteList: FC<NoteListProps> = ({ notes }) => {
  return (
    <div className='list-notes__items'>
      {notes.map((note: Note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
