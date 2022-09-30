import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DatastoreService } from './services/datastore.service';
import { NotesService } from './services/notes.service';

const notesService: NotesService = new NotesService(new DatastoreService());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App notesService={notesService} />);
