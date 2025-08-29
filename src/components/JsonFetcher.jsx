import React, { useState, useEffect } from 'react';

// A simple styled box for displaying the JSON
const Preformatted = ({ children }) => (
  <pre style={{
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '4px',
    whiteSpace: 'pre-wrap', // Ensures long lines wrap
    wordBreak: 'break-all',
  }}>
    <code>{children}</code>
  </pre>
);

export function JsonFetcher({ url }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div>
      <p>Successfully fetched data from: <code>{url}</code></p>
      <Preformatted>
        {/*
          JSON.stringify(value, replacer, space)
          Using `null` and `2` makes the JSON output nicely formatted.
        */}
        {JSON.stringify(data, null, 2)}
      </Preformatted>
    </div>
  );
}
