// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react';
import '../box-styles.css';

// ex 05: Styling

const smallBox = (
  <div
    className="box box--small"
    style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </div>
);
const mediumBox = (
  <div
    className="box box--medium"
    style={{fontStyle: 'italic', backgroundColor: 'pink'}}
  >
    medium pink box
  </div>
);
const largeBox = (
  <div
    className="box box--large"
    style={{fontStyle: 'italic', backgroundColor: 'orange'}}
  >
    large orange box
  </div>
);

// extra 1: Create a custom component

const Box = ({className, style, children}) => {
  console.log(style);
  return (
    <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  );
};

//extra 2: accept a size prop to encapsulate styling

const Box2 = ({size, style, children}) => {
  const classSize = size ? `box box--${size}` : 'box';

  return (
    <div className={classSize} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  );
};

function App() {
  return (
    <div>
      <Box2 size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box2>
      <Box2 size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box2>
      <Box2 size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box2>
    </div>
  );
}

export default App;
