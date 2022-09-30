import { Category } from './Category';

export type Note = {
  id: number;
  name: string;
  created: Date;
  category: Category;
  content: string;
  archived: boolean;
};
