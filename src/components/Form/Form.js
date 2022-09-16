import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');

  const register = (e) => {
    e.preventDefault();
    console.log({ name, handle });
  };

  return (
    <form onSubmit={register}>
      <label htmlFor=''>Name:</label>
      <input
        type='text'
        placeholder='type Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor=''>Vorname:</label>
      <input
        type='text'
        placeholder='type Name'
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
      />
      <br />
      <button>Register</button>
    </form>
  );
};

export default Form;
