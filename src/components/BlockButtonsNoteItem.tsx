import React, { FC, useState } from 'react';
import { Note } from '../models/Note';

type BlockButtonsProps = {
  note: Note;
};

function editNote(note: Note): void {
  console.log(note);
}

function deleteNote(note: Note): void {}

function archivedNote(note: Note): void {}

const BlockButtonsNoteItem: FC<BlockButtonsProps> = ({ note }) => {
  return (
    <div className='note-buttons buttons-column'>
      <div onClick={() => editNote(note)} className='note-button-item' data-btn='edit'>
        <i onClick={() => editNote(note)} className='fas fa-pencil-alt fa-lg'></i>
      </div>
      <div onClick={() => archivedNote(note)} className='note-button-item' data-btn='archived'>
        <i onClick={() => archivedNote(note)} className='fas fa-caret-square-down fa-lg'></i>
      </div>
      <div onClick={() => deleteNote(note)} className='note-button-item' data-btn='remove'>
        <i onClick={() => deleteNote(note)} className='fas fa-trash fa-lg'></i>
      </div>
    </div>
  );
};

export default BlockButtonsNoteItem;
