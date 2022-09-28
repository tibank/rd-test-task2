import React from 'react';

const HeaderList = () => {
  return (
    <div>
      <div className='list-notes__header notes-header'>
        <div className='header data-column'>Name</div>
        <div className='header data-column'>Created</div>
        <div className='header data-column'>Category</div>
        <div className='header data-column'>Content</div>
        <div className='header data-column'>Dates</div>
        <div className='header-buttons  buttons-column'>
          <div className='header-button-item'>
            <i className='far fa-caret-square-down fa-lg'></i>
          </div>
          <div className='header-button-item'>
            <i className='fas fa-trash  fa-lg'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderList;
