import React, { useState, useEffect } from 'react';

function SplashScreen() {
  const [account, setCount] = useState('logged out');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You are ${account}`;
  });

  return (
    <div>
      You are at the splash screen
      <p>
        You are
        {account}
      </p>
      <button
        type="button"
        onClick={() => (account === 'logged out'
          ? setCount('logged in')
          : setCount('logged out'))}
      >
        click me
      </button>
    </div>
  );
}

export default SplashScreen;
