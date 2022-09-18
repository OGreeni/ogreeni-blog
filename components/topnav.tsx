import React, { useState, useContext } from 'react';
import Link from 'next/link';

import styles from './topnav.module.css';
import Button from './button';
import Modal from './modal';
import ContactForm from './contactForm';

import { UserContext } from '../context/authContext';
import { logout } from '../firebase/firebase';

const TopNav = () => {
  const [showModal, setShowModal] = useState(false);

  const { email, loggedIn } = useContext(UserContext);

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
              // <Link href="/logout">
              //   <a className={styles.link}>Logout</a>
              // </Link>
              <button onClick={() => logout()}>Logout</button>
            )}

            {!loggedIn && (
              <>
                <Link href="/login">
                  <a className={styles.link}>Login</a>
                </Link>
                <Link href="/register">
                  <a className={styles.link}>Register</a>
                </Link>
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
