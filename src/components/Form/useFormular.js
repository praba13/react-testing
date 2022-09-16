import React, { useState } from 'react';

const useFormular = () => {
  const [state, setstate] = useState({});

  const handleChange = (e) => {
    e.persist();
    setstate((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return [state, handleChange, handleSubmit];
};

export default useFormular;
