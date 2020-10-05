// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react';

function UsernameForm({onSubmitUsername}) {
  // const refValue = React.useRef('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }
  /**
   * extra 1: using refs
   */

  // function handleSubmit(event) {
  //   const value = refValue.current.value;

  //   event.preventDefault();
  //   onSubmitUsername(value);
  // }

  /**
   * extra 2: Validate lower-case
   */

  function handleChange(event) {
    const value = event.target.value;
    const isValid = value.toLowerCase() === value;

    setUsername(value);
    setError(isValid ? null : 'Username must be lower case');
  }

  function AlertContainer() {
    return !error ? null : (
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
    );
  }

  /**
   * extra 3: Control the input value
   */

  // function handleChange2(event) {
  //   const value = event.target.value;

  //   setUsername(value.toLowerCase());
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <AlertContainer />
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
