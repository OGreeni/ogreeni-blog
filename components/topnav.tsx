import React, { useState, useContext } from 'react';
import Link from 'next/link';

import googleLogo from '/images/googlelogo.png';

import styles from './topnav.module.css';
import Button from './button';
import Modal from './modal';
import ContactForm from './contactForm';

import { UserContext } from '../context/authContext';
import { signInWithGoogle, logout } from '../firebase/firebase';

const TopNav = () => {
  const [showModal, setShowModal] = useState(false);

  const { loggedIn } = useContext(UserContext);

  return (
    <>
      <nav className={styles.topNav}>
        <div className={styles.container}>
          <div>
            <Link href="/">
              <a className={`${styles.link} ${styles.brand}`}>
                Omri <span className={styles.green}>Green</span>
              </a>
            </Link>
          </div>
          <div>
            <a
              className={styles.link}
              href="http://github.com/OGreeni"
              target="_blank"
            >
              GitHub
            </a>
            <Link href="/about">
              <a className={styles.link}>About</a>
            </Link>

            {loggedIn && (
              <Button onClick={() => logout()} image="/images/googlelogo.png">
                Sign out
              </Button>
            )}

            {!loggedIn && (
              <>
                <Button
                  onClick={signInWithGoogle}
                  image="/images/googlelogo.png"
                >
                  Sign in
                </Button>
              </>
            )}
            <Button onClick={() => setShowModal(true)}>Contact</Button>
          </div>
        </div>
      </nav>
      <Modal show={showModal} setShow={setShowModal}>
        <ContactForm />
      </Modal>
    </>
  );
};

export default TopNav;
