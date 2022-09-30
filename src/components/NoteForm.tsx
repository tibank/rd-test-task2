import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Note } from '../models/Note';
import { NotesService } from '../services/notes.service';

type NoteFormProps = {
  note: Note;
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  setVisible: Dispatch<SetStateAction<Boolean>>;
  notesService: NotesService;
};

const NoteForm: FC<NoteFormProps> = ({ note, setVisible, addNote, updateNote, notesService }) => {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const [name, setName] = useState<string>(note.name);
  const [category, setCategory] = useState<string>('' + note.category.id);
  const [content, setContent] = useState<string>(note.content);

  function createUpdate() {
    note.name = name;
    note.content = content;
    const findedCategory = notesService.findCategoryOne(+category);
    if (findedCategory) {
      note.category = findedCategory;
    }

    if (!note.id) {
      note.id = notesService.getNewNoteId();
      addNote(note);
    } else {
      updateNote(note);
    }
    setVisible(false);
  }

  return (
    <div>
      <div className='item-note__header'>{note.name}</div>
      <div className='item-note__body'>
        <form name='note'>
          <div className='item-note__lines'>
            <div className='item-note__text'>name:</div>
            <input
              className='item-note__input'
              type='text'
              name='name'
              value={name}
              placeholder='name'
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className='item-note__lines'>
            <div className='item-note__text'>created date:</div>
            <div className='item-note-value__text'>{note.created.toLocaleDateString('en-US', options)}</div>
          </div>

          <div className='item-note__lines'>
            <div className='item-note__text'>category:</div>
            <div className='item-note-block__select'>
              <select value={category} name='category' onChange={(e) => setCategory(e.target.value)}>
                <option value=''>Select category note</option>
                <option value='1'>Task</option>
                <option value='2'>Idea</option>
                <option value='3'>Random Thought</option>
              </select>
            </div>
          </div>

          <div className='item-note__lines'>
            <div className='item-note__text'>content:</div>
            <textarea
              className='item-note__input'
              name='content'
              value={content}
              cols={30}
              rows={5}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </form>
        <div className='item-note__footer'>
          <div className='item-note-btn__footer'>
            <button className='item-note__btn' onClick={(e) => createUpdate()}>
              Save
            </button>
          </div>
          <div className='item-note-btn__footer'>
            <button className='item-note__btn' onClick={() => setVisible(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
