import React, { FC } from 'react';
import { StatNotes } from '../models/statCategories';

type CategoryItemProps = {
  stat: StatNotes;
};

const CategoryItem: FC<CategoryItemProps> = ({ stat }) => {
  return (
    <div className='categories-notes__items'>
      <div className='list-categories__row'>
        <div className='column-category-name'>{stat.category.name}</div>
        <div className='column-category-active'>{stat.active}</div>
        <div className='column-category-archived'>{stat.archived}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
