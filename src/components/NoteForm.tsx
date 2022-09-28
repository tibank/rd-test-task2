import React, { FC } from 'react';

type NoteFormProps = {
    title: string;
};

const NoteForm: FC<NoteFormProps> = ({ title }) => {
    return (
        <div className='item-note__body'>
            <div className='item-note__header'>title</div>
            <form name='note'>
                <div className='item-note__text'>name:</div>
                <input type='text' name='name' placeholder='name'></input>
                <div className='item-note__text'>created date:</div>

                <div className='item-note__text'>category:</div>
                <div className='item-note-block__select'>
                    <select name='category'>
                        <option value=''>Select category note</option>
                        <option value='1'>Task</option>
                        <option value='2'>Idea</option>
                        <option value='3'>Random Thought</option>
                    </select>
                </div>

                <div className='item-note__text'>content:</div>
            </form>
        </div>
    );
};

export default NoteForm;
