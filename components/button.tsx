import React from 'react';

import styles from './button.module.css';

interface Props {
  children: string;
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
