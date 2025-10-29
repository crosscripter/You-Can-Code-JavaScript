import { useState, useEffect } from 'react';

export function useUserData(userId) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(json => setData(json));
  }, [userId]);

  return data;
}
