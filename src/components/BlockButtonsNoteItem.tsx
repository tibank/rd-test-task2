import React, { FC, useState } from 'react';
import { Note } from '../models/Note';

type BlockButtonsProps = {
  note: Note;
  editNote: (note: Note) => void;
  archivedNote: (note: Note) => void;
  removeNote: (note: Note) => void;
};

const BlockButtonsNoteItem: FC<BlockButtonsProps> = ({ note, editNote, archivedNote, removeNote }) => {
  return (
    <div className='note-buttons buttons-column'>
      <div onClick={() => editNote(note)} className='note-button-item' data-btn='edit'>
        <i onClick={() => editNote(note)} className='fas fa-pencil-alt fa-lg'></i>
      </div>
      <div onClick={() => archivedNote(note)} className='note-button-item' data-btn='archived'>
        <i onClick={() => archivedNote(note)} className='fas fa-caret-square-down fa-lg'></i>
      </div>
      <div onClick={() => removeNote(note)} className='note-button-item' data-btn='remove'>
        <i onClick={() => removeNote(note)} className='fas fa-trash fa-lg'></i>
      </div>
    </div>
  );
};

export default BlockButtonsNoteItem;
