import React from 'react';

import styles from './Footer.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Footer = ({ children }: Props) => {
  return (
    <footer>
      <div className={styles.container}>{children} </div>
    </footer>
  );
};

export default Footer;
