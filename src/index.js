import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
      }}
    >
      <p
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '50%',
          textAlign: 'center',
          color: 'yellow',
          fontSize: '30px',
        }}
      >
        React Native is cool!
      </p>
    </div>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
