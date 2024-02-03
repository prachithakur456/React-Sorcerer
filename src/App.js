import React, { useEffect, useState } from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import BoldTextEditor from './components/TextEditor';
import './App.css';
import { APP_TITLE, SAVE } from './constants';

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  useEffect(() => {
    const savedData = localStorage.getItem('items');
    if (savedData) {
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(savedData))));
    }
  }, []);

  const saveData = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    localStorage.setItem('items', JSON.stringify(rawContentState));
  };

  console.log("editorState", EditorState.createEmpty())
  return (
    <div className="App">
      <div className='app-header'>
        <h2>{APP_TITLE}</h2>
        <button onClick={saveData}>{SAVE}</button>
      </div>
      <div className="editorContainer">
        <div className="editors">
          <BoldTextEditor
            editorState={editorState}
            setEditorState={setEditorState} />
        </div>
      </div>
    </div>
  );
}

export default App;
