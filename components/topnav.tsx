import React, { useState } from 'react';
import Link from 'next/link';

import styles from './topnav.module.css';
import Button from './button';
import Modal from './modal';

const ContactForm = () => {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" />
      <Button onClick={() => console.log('Clicked')}>Submit</Button>
    </form>
  );
};

const TopNav = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  const handleShowModal = () => {
    setShowModal(true);
  };

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
            <Link href="/login">
              <a className={styles.link}>Login</a>
            </Link>
            <Button onClick={handleShowModal}>Contact</Button>
          </div>
        </div>
      </nav>
      <Modal show={showModal}>Test</Modal>
    </>
  );
};

export default TopNav;
