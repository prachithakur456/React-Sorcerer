import React, { useRef } from 'react';
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';
import { styleMap, charMappingWithStyle } from '../constants';
import 'draft-js/dist/Draft.css';

const TextEditor = ({editorState, setEditorState}) => {
  const editorRef = useRef(null);

  const handleInputChange = (newEditorState) => {
    const contentState = newEditorState.getCurrentContent();
    const selectionState = newEditorState.getSelection();
    const block = contentState.getBlockForKey(selectionState.getStartKey());
    const blockText = block.getText();
    const stylingChars = Object.keys(charMappingWithStyle).find(item => item === blockText);
    if (stylingChars) {
      const newContentState = Modifier.replaceText(
        contentState,
        selectionState.merge({ anchorOffset: 0, focusOffset: stylingChars.length }),
        blockText.substring(stylingChars.length),
        null
      );
      const newState = EditorState.push(newEditorState, newContentState, 'change-inline-style');
      const data = RichUtils.toggleInlineStyle(
        newState,
        charMappingWithStyle[stylingChars]
      );
      setEditorState(data);
    } else {
      setEditorState(newEditorState);
    }
  };

  return (
    <Editor
      editorState={editorState}
      onChange={handleInputChange}
      customStyleMap={styleMap}
      ref={editorRef}
    />

  );
};

export default TextEditor;
