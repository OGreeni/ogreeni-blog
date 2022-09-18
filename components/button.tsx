import React from 'react';
import { StaticImageData } from 'next/image';

import styles from './button.module.css';

interface Props {
  children: string;
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
  image?: string;
}

const Button = ({ children, onClick, image }: Props) => {
  if (!image) {
    return (
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    );
  } else {
    return (
      <button className={styles.uncoloredButton} onClick={onClick}>
        {children} <img className={styles.image} src={image} />
      </button>
    );
  }
};

export default Button;
