import React from 'react';

import styles from './modal.module.css';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  show: boolean;
}

const Modal = ({ children, show }: Props) => {
  if (show) {
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
  return null;
};

export default Modal;
