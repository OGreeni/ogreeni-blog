import React from 'react';

import styles from './button.module.css';

interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
