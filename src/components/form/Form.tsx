import React from 'react';

import styles from './Form.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Form = ({ children }: Props) => {
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      {children}
    </form>
  );
};

export default Form;
