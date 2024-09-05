// src/components/LanguageModelSuggestions.js
import React, { useState } from 'react';
import axios from 'axios';

const LanguageModelSuggestions = ({ copiedText }) => {
  const [suggestion, setSuggestion] = useState('');

  const getSuggestions = async () => {
    try {
      const response = await axios.post('/api/get-suggestion', { text: copiedText });
      setSuggestion(response.data.suggestion);
    } catch (error) {
      console.error('Error fetching suggestion:', error);
    }
  };

  return (
    <div>
      <h3>Proposal Suggestions</h3>
      <button onClick={getSuggestions}>Generate Suggestions</button>
      <p>{suggestion}</p>
    </div>
  );
};

export default LanguageModelSuggestions;
