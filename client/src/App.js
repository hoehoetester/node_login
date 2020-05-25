import React, { useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('nnn');
  const [email, setEmail] = useState('eee');
  const [password, setPassword] = useState('ppp');

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div className='App'>
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={onNameChange}
            />
          </div>
          <div>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div>
            <label htmlFor='password'>Password: </label>
            <input
              type='text'
              id='password'
              name='password'
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <div>
            <input type='submit' value='Register' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
