import { notesMocked } from '../assets/notes.mocked';
import { categoriesMocked } from '../assets/categories.mocked';
import { Category } from '../models/Category';
import { Note } from '../models/Note';

export class DatastoreService {
  public categories: Category[];
  public notes: Note[];

  constructor() {
    this.notes = this.loadNotes();
    this.categories = this.loadCategories();
  }

  loadCategories(): Category[] {
    return categoriesMocked;
  }

  loadNotes(): Note[] {
    return notesMocked;
  }
}
