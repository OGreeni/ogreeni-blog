import React from 'react';

import styles from './Form.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Form = ({ children }: Props) => {
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:8080/email/send-email', {
      method: 'POST',
      body: new FormData(
        document.getElementById('emailFormEl') as HTMLFormElement
      ),
    });
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler} id="emailFormEl">
      {children}
    </form>
  );
};

export default Form;
