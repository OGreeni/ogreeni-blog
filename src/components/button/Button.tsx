import React from 'react';

import styles from './Button.module.css';

interface Props {
  children: string;
}

const Button = (props: Props) => {
  return (
    <button className={styles.button}>
      {props.children}
      <img
        src="https://github.com/cadgerfeast/pixel-icons/raw/master/png-128/floppy-disk.png"
        alt="Download"
      />
    </button>
  );
};

export default Button;
