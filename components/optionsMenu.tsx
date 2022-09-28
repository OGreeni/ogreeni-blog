import React, { useContext } from 'react';
import Link from 'next/link';

import { UserContext } from '../context/authContext';

import { signInWithGoogle, logout } from '../firebase/firebase';

import styles from './optionsMenu.module.css';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionsMenu = ({ show, setShow, setShowModal }: Props) => {
  const { loggedIn } = useContext(UserContext);

  return (
    <div className={`${styles.container} ${show && styles.active}`}>
      <div>
        <a
          href="http://github.com/OGreeni"
          target="_blank"
          onClick={() => setShow(false)}
        >
          GitHub
        </a>
      </div>
      <div onClick={() => setShow(false)}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <button
          className={styles.buttonLink}
          onClick={() => {
            if (loggedIn) {
              logout();
            } else {
              signInWithGoogle();
            }
            setShow(false);
          }}
        >
          {loggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
      <div>
        <button
          className={styles.buttonLink}
          onClick={() => {
            setShow(false);
            setShowModal(true);
          }}
        >
          Contact
        </button>
      </div>
      <div onClick={() => setShow(false)} className={styles.close}>
        <img src="/images/close.png" alt="close" />{' '}
      </div>
    </div>
  );
};

// {loggedIn && (
//     <Button onClick={() => logout()} image="/images/googlelogo.png">
//       Sign out
//     </Button>
//   )}

//   {!loggedIn && (
//     <>
//       <Button
//         onClick={signInWithGoogle}
//         image="/images/googlelogo.png"
//       >
//         Sign in
//       </Button>

export default OptionsMenu;
