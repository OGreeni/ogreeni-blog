import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <a href="https://www.linkedin.com/in/omri-green-880091240/">
          Contact me
          <img
            src="https://github.com/cadgerfeast/pixel-icons/blob/master/png-128/phone.png?raw=true"
            alt="Contact"
          />
        </a>
        <a href="https://www.linkedin.com/in/omri-green-880091240/">
          LinkedIn
          <img
            src="https://github.com/cadgerfeast/pixel-icons/blob/master/png-128/linkedin.png?raw=true"
            alt="LinkedIn"
          />
        </a>
      </div>
    </footer>
  ); // SECOND LINKEDIN LINK IS PLACEHOLDER
};

export default Footer;

// src="https://github.com/cadgerfeast/pixel-icons/blob/master/png-128/linkedin.png?raw=true"

// src="https://github.com/cadgerfeast/pixel-icons/blob/master/png-128/phone.png?raw=true"
