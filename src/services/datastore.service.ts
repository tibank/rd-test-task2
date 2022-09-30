import { notesMocked } from '../assets/notes.mocked';
import { categoriesMocked } from '../assets/categories.mocked';
import { Category } from '../models/Category';
import { Note } from '../models/Note';

export class DatastoreService {
  public categories: Category[];
  public notes: Note[];

  constructor() {
    this.categories = this.loadCategories();
    this.notes = this.loadNotes();
  }

  loadCategories(): Category[] {
    return categoriesMocked;
  }

  loadNotes(): Note[] {
    notesMocked.forEach((elem) => {
      const category = this.categories.find((x) => x.id === elem.category.id);
      if (category) {
        elem.category = category;
      }
    });
    return notesMocked;
  }
}
