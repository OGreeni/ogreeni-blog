import React from 'react';

import styles from './Modal.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, show, setShow }: Props) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className={styles.backdrop} onClick={() => setShow(false)}></div>
      <div className={styles.modal}>{children}</div>
    </>
  );
};

export default Modal;
