import React, { Dispatch, FC, SetStateAction } from 'react';
import { getStringDates } from '../helpers/getStringDates';
import { Note } from '../models/Note';
import { StatNotes } from '../models/statCategories';
import BlockButtonsNoteItem from './BlockButtonsNoteItem';

type NoteItemProps = {
  note: Note;
  editNote: (note: Note) => void;
  archivedNote: (note: Note) => void;
  removeNote: (note: Note) => void;
  setStatNotes: Dispatch<SetStateAction<StatNotes[]>>;
};

const NoteItem: FC<NoteItemProps> = ({ note, editNote, archivedNote, removeNote, setStatNotes }) => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return (
    <div className='list-notes__row'>
      <div className='data-column truncate note-name'>{note.name}</div>
      <div className='data-column'>{note.created.toLocaleDateString('en-US', options)}</div>
      <div className='data-column'>{note.category.name}</div>
      <div className='data-column truncate'>{note.content}</div>
      <div className='data-column truncate'>{getStringDates(note.content)}</div>
      <BlockButtonsNoteItem note={note} editNote={editNote} archivedNote={archivedNote} removeNote={removeNote} />
    </div>
  );
};

export default NoteItem;
