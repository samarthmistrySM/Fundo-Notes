import React, {FC, useState} from 'react';
import NoteContext from './NoteContext';

import {Note} from '../types.ts';

interface Props {
    children: React.ReactNode;
}

const NoteState: FC<Props> = ({children}) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) : void => {
    setNotes(prevNotes => [...prevNotes, note]);
  };

  const clearNotes = () : void => {
    setNotes([]);
  };

  return (
    <NoteContext.Provider value={{notes, addNote, clearNotes}}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
