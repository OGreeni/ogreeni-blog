import React, { useEffect, useState } from 'react';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import Layout from '../components/layout';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // loading screen
      console.log('LOADING...');
      return;
    }
    if (user) {
      console.log('USER LOGGED IN');
    }
  }, [loading]);

  return (
    <Layout>
      <form className={styles.contactForm}>
        <label htmlFor="email" className={styles.inputLabel}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <span className={styles.inputUnderline}></span>
        <label htmlFor="password" className={styles.inputLabel}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <span className={styles.inputUnderline}></span>
        <button onClick={() => logInWithEmailAndPassword(email, password)}>
          Login
        </button>
        <button onClick={signInWithGoogle}>Login with Google</button>
        <div>FORGOT PASSWORD</div>
        <div>Don't have an account? Register</div>
      </form>
    </Layout>
  );
};

{
  /* <form className={styles.contactForm} onSubmit={formOnSubmit}>
<h3>Thank you for your interest.</h3>
<h4>I'll reach out to you as soon as I can!</h4>
<label htmlFor="subject" className={styles.inputLabel}>
  Subject:
</label>
<input
  type="text"
  name="subject"
  id="subject"
  required
  value={subjectValue}
  onChange={(e) => setSubjectValue(e.target.value)}
/>
<span className={styles.inputUnderline}></span>
<label htmlFor="email" className={styles.inputLabel}>
  Email:
</label>
<input
  type="email"
  name="email"
  id="email"
  required
  value={emailValue}
  onChange={(e) => setEmailValue(e.target.value)}
/>
<span className={styles.inputUnderline}></span>
<Button onClick={() => console.log('Clicked')}>Submit</Button>
</form>
{formSubmitted && (
<div className={styles.success}>Form submitted successfully!</div>
)} */
}

export default Login;
