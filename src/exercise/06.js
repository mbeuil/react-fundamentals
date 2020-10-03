// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react';

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef('');
  const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState('');

  // ex 6: Forms

  function handleSubmit(event) {
    const value = event.target.elements.usernameInput.value;

    event.preventDefault();
    onSubmitUsername(value);
  }

  // extra 1: using refs

  function handleSubmit2(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  // extra 2: Validate lower-case

  const isLowercase = value => {
    return value === value.toLowerCase() ? true : false;
  };

  const handleChange = event => {
    const {value} = event.target;
    const isValid = isLowercase(value);

    setError(isValid ? '' : 'Username must be lower case');
  };

  //extra 3: Control the input value

  const isError = async value => {
    const isValid = isLowercase(value);
    setError(isValid ? '' : 'Username must be lower case');
  };

  const handleChange2 = event => {
    const {value} = event.target;

    setUsername(value);
    isError(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange2}
          value={username}
          ref={usernameInputRef}
        />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
