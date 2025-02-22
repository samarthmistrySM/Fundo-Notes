import { createContext } from 'react';
import { Note } from '../types';

export interface NoteContextType {
    notes: Note[];
    addNote: (note: Note) => void;
    clearNotes: () => void;
}

const defaultValue: NoteContextType = {
    notes: [],
    addNote: () => {},
    clearNotes: () => {},
};

const NoteContext = createContext<NoteContextType>(defaultValue);

export default NoteContext;
