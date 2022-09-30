import React, { FC } from 'react';
import { StatNotes } from '../models/statCategories';
import CategoryItem from './CategoryItem';
import HeaderCategories from './HeaderCategories';

type CategoryListProps = {
  statNote: StatNotes[];
};

const CategoriesList: FC<CategoryListProps> = ({ statNote }) => {
  return (
    <div>
      <HeaderCategories />
      {statNote.map((stat: StatNotes, index: number) => (
        <CategoryItem key={index} stat={stat} />
      ))}
    </div>
  );
};

export default CategoriesList;
