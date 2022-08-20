import React from 'react';

import styles from './Footer.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className={styles.container}>{props.children} </div>
    </footer>
  );
};

export default Footer;
