import React, { useState } from 'react';
import './style.css';
import TextInput from '../input';
import { postData } from '../../utils/fetch';

export default function Form({ setIsLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const res = await postData('/api/v1/auth/login', form);

      window.localStorage.setItem('accessToken', res.data.accessToken);
      setIsLogin(true);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className='form'>
      <TextInput
        name='email'
        type='email'
        onChange={onChange}
        value={form.email}
      />
      <TextInput
        type='password'
        name='password'
        value={form.password}
        onChange={onChange}
      />
      <button onClick={onSubmit}>Signin</button>
    </div>
  );
}
