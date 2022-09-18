import React, { FormEvent, useState } from 'react';

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase/firebase';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button
          onClick={() => registerWithEmailAndPassword(name, email, password)}
        >
          Submit
        </button>
      </form>
      <button onClick={signInWithGoogle}>Register with Google</button>
      <div>Already have an account? Login</div>
    </>
  );
};

export default Register;
