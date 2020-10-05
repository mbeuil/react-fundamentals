// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react';
import '../box-styles.css';

const smallBox = (
  <div
    className="box box--small"
    style={{background: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
);

function Box({className = '', style, children}) {
  return (
    <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  );
}

function Box2({size, style, children}) {
  return (
    <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      {smallBox}
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box2 size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box2>
      <Box>sizeless box</Box>
    </div>
  );
}

export default App;
