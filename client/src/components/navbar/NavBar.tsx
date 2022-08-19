import React from 'react';
import styles from './NavBar.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const NavBar = (props: Props) => {
  return <nav className={styles.mainNav}>{props.children}</nav>;
};

export default NavBar;
