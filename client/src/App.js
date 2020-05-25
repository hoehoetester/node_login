import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [name, setName] = useState('nnn');
  const [email, setEmail] = useState('email@test.com');
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
    // axios.get('/api').then((res) => console.log(res));

    const userToRegister = {
      name,
      email,
      password,
    };
    axios.post('/api/users', userToRegister).then((res) => console.log(res));
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
