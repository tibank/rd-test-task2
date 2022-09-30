import React from 'react';

const HeaderCategories = () => {
    return (
        <div className='categories-notes__header notes-header'>
            <div className='header column-category-name'>Note category</div>
            <div className='header column-category-active'>Active</div>
            <div className='header column-category-archived'>Archived</div>
        </div>
    );
};

export default HeaderCategories;
