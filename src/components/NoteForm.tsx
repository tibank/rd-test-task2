import React, { FC, useState } from 'react';
import { Note } from '../models/Note';

type NoteFormProps = {
  title: string;
  note: Note;
};

const NoteForm: FC<NoteFormProps> = ({ title, note }) => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };

  return (
    <div>
      <div className='item-note__header'>title</div>
      <div className='item-note__body'>
        <form name='note'>
          <div className='item-note__lines'>
            <div className='item-note__text'>name:</div>
            <input className='item-note__input' type='text' name='name' placeholder='name' value={note.name}></input>
          </div>
          <div className='item-note__lines'>
            <div className='item-note__text'>created date:</div>
            <div className='item-note-value__text'>{note.created.toLocaleDateString('en-US', options)}</div>
          </div>

          <div className='item-note__lines'>
            <div className='item-note__text'>category:</div>
            <div className='item-note-block__select'>
              <select name='category'>
                <option value=''>Select category note</option>
                <option value='1'>Task</option>
                <option value='2'>Idea</option>
                <option value='3'>Random Thought</option>
              </select>
            </div>
          </div>

          <div className='item-note__lines'>
            <div className='item-note__text'>content:</div>
            <textarea className='item-note__input' name='' cols={30} rows={5}></textarea>
          </div>
        </form>
        <div className='item-note__footer'></div>
      </div>
    </div>
  );
};

export default NoteForm;
