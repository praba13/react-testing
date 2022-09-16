import React from 'react';
import useFormular from './useFormular';

const Formular = () => {
  const register = () => {
    console.log(values);
  };

  const [values, handleChange, handleSubmit] = useFormular(register);

  return (
    <form onSubmit={register}>
      <label htmlFor=''>Name:</label>
      <input
        type='text'
        placeholder='type Name'
        value={values.name}
        name='name'
        onChange={handleChange}
      />
      <br />
      <label htmlFor=''>Vorname:</label>
      <input
        type='text'
        placeholder='type Vorname'
        name='handle'
        value={values.handle}
        onChange={handleChange}
      />
      <br />
      <button>Register</button>
    </form>
  );
};

export default Formular;
