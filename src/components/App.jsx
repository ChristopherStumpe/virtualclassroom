import React, { useState, useEffect } from 'react';

function App() {
  const [isOnline, setIsOnline] = useState('logged out');
  useEffect(() => {
    document.title = `You are ${isOnline}`;
  });

  // Similar to componentDidMount and componentDidUpdate:

  return (
    <div>
      <p>
        You are
        {isOnline}
      </p>
      <button
        type="button"
        onClick={() => (isOnline === 'logged out'
          ? setIsOnline('logged in')
          : setIsOnline('logged out'))}
      >
        click me
      </button>
    </div>
  );
}

export default App;
