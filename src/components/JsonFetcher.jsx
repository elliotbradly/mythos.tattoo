import React, { useState, useEffect } from 'react';

// (The component code is the same as the previous answer)
// ... it uses useState, useEffect, and fetch ...

export function JsonFetcher({ url }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then(setData)
      .catch(e => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [url]);

  if (isLoading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
    // ... add styling as needed
  );
}
