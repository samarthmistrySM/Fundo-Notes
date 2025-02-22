import React from 'react';
import Navigator from './navigation/Navigator.tsx';
import NoteState from './context/NoteState.tsx';

const App = () => {
  return (
    <NoteState>
      <Navigator />
    </NoteState>
  );
};

export default App;
