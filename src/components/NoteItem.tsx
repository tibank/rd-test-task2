import React, { FC } from 'react';
import { getStringDates } from '../helpers/getStringDates';
import { Note } from '../models/Note';
import BlockButtonsNoteItem from './BlockButtonsNoteItem';

type NoteItemProps = {
  note: Note;
};

const NoteItem: FC<NoteItemProps> = ({ note }) => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return (
    <div className='list-notes__row'>
      <div className='data-column truncate note-name'>{note.name}</div>
      <div className='data-column'>{note.created.toLocaleDateString('en-US', options)}</div>
      <div className='data-column'>{note.category.name}</div>
      <div className='data-column truncate'>{note.content}</div>
      <div className='data-column truncate'>{getStringDates(note.content)}</div>
      <BlockButtonsNoteItem note={note} />
    </div>
  );
};

export default NoteItem;
