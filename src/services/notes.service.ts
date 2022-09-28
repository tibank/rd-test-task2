import { DatastoreService } from './datastore.service';
import { Note } from '../models/Note';
import { StatNotes } from '../models/statCategories';
import { Category } from '../models/Category';

export class NotesService {
  constructor(private dataStore: DatastoreService) {}

  create(note: Note) {
    note.id = this.getNewNoteId();
    this.dataStore.notes.push(note);

    return note;
  }

  findAll(): Note[] {
    return this.dataStore.notes;
  }

  findOne(id: number): Note | null {
    const note = this.dataStore.notes.find((element) => element.id === id);
    if (!note) {
      throw new Error('Not found note by id: ' + id);
    }
    return note;
  }

  update(id: number, note: Note) {
    const updatedNote = this.findOne(id);
    if (note) {
      Object.assign(note, updatedNote);
    } else {
      throw new Error('Not found note by id: ' + id);
    }

    return note;
  }

  remove(id: number) {
    const index: number = this.dataStore.notes.findIndex((element: Note) => element.id === id);

    if (index === -1) {
      throw new Error('Not found note by id: ' + id);
    }

    let result: Note[];
    if (index === 0) {
      result = this.dataStore.notes.slice(1);
    } else if (index < this.dataStore.notes.length - 1) {
      result = this.dataStore.notes.slice(0, index).concat(this.dataStore.notes.slice(index + 1));
    } else {
      result = this.dataStore.notes.slice(0, index);
    }
    this.dataStore.notes = result;
  }

  getStat() {
    const mapCategories = new Map<Category, StatNotes>();

    for (let i = 0; i < this.dataStore.notes.length; i++) {
      const category = this.dataStore.notes[i].category;
      if (mapCategories.has(category)) {
        mapCategories.get(category)?.addNoteToStat(this.dataStore.notes[i]);
      } else {
        const statItem = new StatNotes(category);
        statItem.addNoteToStat(this.dataStore.notes[i]);
        mapCategories.set(category, statItem);
      }
    }
    const result: StatNotes[] = [];
    mapCategories.forEach((value: StatNotes, key: Category, map: Map<Category, StatNotes>) => result.push(value));

    return result;
  }

  getNewNoteId() {
    if (!this.dataStore.notes.length) {
      return 1;
    }
    this.dataStore.notes.sort((a, b) => a.id - b.id);

    return this.dataStore.notes[this.dataStore.notes.length - 1].id + 1;
  }
}
