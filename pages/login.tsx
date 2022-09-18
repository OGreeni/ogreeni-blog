import React, { useEffect, useState } from 'react';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // loading screen
      return;
    }
    if (user) {
      console.log('LOGGED IN!');
    }
  }, [loading]);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <button onClick={() => logInWithEmailAndPassword(email, password)}>
        Login
      </button>
      <button onClick={signInWithGoogle}>Login with Google</button>

      <div>FORGOT PASSWORD</div>
      <div>DONT HAVE AN ACCOUNT?</div>
    </>
  );
};

export default Login;
