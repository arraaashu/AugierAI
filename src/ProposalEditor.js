// src/components/ProposalEditor.js
import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ProposalEditor = ({ onCopy }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const handleCopy = () => {
    const content = editorState.getCurrentContent().getPlainText();
    onCopy(content);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
      <CopyToClipboard text={editorState.getCurrentContent().getPlainText()} onCopy={handleCopy}>
        <button>Copy</button>
      </CopyToClipboard>
    </div>
  );
};

export default ProposalEditor;
