import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>{formattedTime}</h1>
    </div>
  );
}

export default Clock;
