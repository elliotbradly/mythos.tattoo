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

  useEffect(() => {
    // Define an async function inside the effect to perform the fetch
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); // The effect re-runs if the `url` prop changes

  // Render different UI based on the state
  if (isLoading) {
    return <p>Loading data from {url}...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error fetching data: {error}</p>;
  }

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
