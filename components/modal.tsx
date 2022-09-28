import React from 'react';

import styles from './modal.module.css';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, show, setShow }: Props) => {
  if (show) {
    return (
      <>
        <div className={styles.modalContainer}>
          <div
            className={styles.backdrop}
            onClick={() => {
              setShow(false);
              document.body.classList.remove('overflowHidden');
            }}
          />
          <div className={styles.modal}>
            <div
              onClick={() => {
                setShow(false);
                document.body.classList.remove('overflowHidden');
              }}
            >
              <img src="/images/close.png" alt="close" />{' '}
            </div>
            {children}
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default Modal;
