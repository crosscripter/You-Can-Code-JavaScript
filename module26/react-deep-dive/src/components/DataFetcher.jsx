import React, { useState, useEffect } from 'react';

function DataFetcher({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {

        fetch(url)
        .then(response => response.json())
        .then(json => setData(json))

    }, 3000);
  }, [url]); // Only re-run the effect if the URL changes

  return (
    <pre style={{fontSize: 'small'}}>
      {data ? JSON.stringify(data, null, 2) : 'Loading...'}
    </pre>
  );
}

export default DataFetcher;