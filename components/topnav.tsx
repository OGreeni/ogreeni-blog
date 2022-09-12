import React, { FormEvent, useState } from 'react';
import Link from 'next/link';

import styles from './topnav.module.css';
import Button from './button';
import Modal from './modal';

const ContactForm = () => {
  const [subjectValue, setSubjectValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('subject', subjectValue);
    formData.append('email', emailValue);

    setSubjectValue('');
    setEmailValue('');

    fetch('/api/email', {
      method: 'POST',
      body: formData,
    });

    setFormSubmitted(true);
  };
  return (
    <>
      <form className={styles.contactForm} onSubmit={formOnSubmit}>
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
      )}
    </>
  );
};

const TopNav = () => {
  const [showModal, setShowModal] = useState(false);

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
