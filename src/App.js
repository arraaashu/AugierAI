import React, { useState } from 'react';
import ProposalEditor from './ProposalEditor';
import ModelSuggestions from './ModelSuggestions';
import './App.css';

const App = () => {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text) => {
    setCopiedText(text);
  };

  return (
    <div className="App">
      <div className="editor-section">
        <h2>Proposal Editor</h2>
        <ProposalEditor onCopy={handleCopy} />
      </div>
      <div className="suggestion-section">
        <ModelSuggestions copiedText={copiedText} />
      </div>
    </div>
  );
};

export default App;
