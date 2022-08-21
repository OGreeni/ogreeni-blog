import React from 'react';
import styles from './NavBar.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const NavBar = ({ children }: Props) => {
  return <nav className={styles.mainNav}>{children}</nav>;
};

export default NavBar;
