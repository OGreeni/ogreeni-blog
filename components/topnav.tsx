import React, { useState, useContext } from 'react';
import Link from 'next/link';

import styles from './topnav.module.css';
import Button from './button';
import Modal from './modal';
import ContactForm from './contactForm';
import OptionsMenu from './optionsMenu';

import { UserContext } from '../context/authContext';
import { signInWithGoogle, logout } from '../firebase/firebase';

const TopNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
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
          <div className={styles.links}>
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
            <Button
              onClick={() => {
                setShowModal(true);
                document.body.classList.add('overflowHidden');
              }}
            >
              Contact
            </Button>
          </div>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => {
            setHamburgerClicked(
              (prevHamburgerClicked) => !prevHamburgerClicked
            );
            document.body.classList.add('overflowHidden');
          }}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
      <Modal show={showModal} setShow={setShowModal}>
        <ContactForm />
      </Modal>
      <OptionsMenu
        show={hamburgerClicked}
        setShow={setHamburgerClicked}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default TopNav;
