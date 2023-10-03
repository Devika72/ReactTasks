import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateQuote = () => {
    setIsLoading(true);

    axios.get('https://api.quotable.io/random')
      .then(response => setQuote(response.data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    handleGenerateQuote();
  }, []); // Fetch a quote when component mounts

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <button onClick={handleGenerateQuote}>Generate Quote</button>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error fetching quote</p>}

      {quote && (
        <div>
          <p>{quote.content}</p>
          <p>- {quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
