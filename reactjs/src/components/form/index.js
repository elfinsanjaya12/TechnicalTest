import React, { useState } from 'react';
import TextInput from '../input';

export default function Form() {
  const [form, setForm] = useState({ email: '', password: '' });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ marginY: '5px' }}>
      <TextInput
        name='email'
        type='email'
        onChange={onChange}
        value={form.email}
      />
      <TextInput
        type='password'
        name='email'
        value={form.password}
        onChange={onChange}
      />
      <button>Signin</button>
    </div>
  );
}
