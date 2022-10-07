import React from 'react';
import Layout from 'components/layout';

import styles from 'styles/404.module.css';

const Custom404 = () => {
  return (
    <Layout>
      <h1 className={styles.errorTitle}>
        <span className={styles.statusCode}>404</span> - Page Not Found
      </h1>
    </Layout>
  );
};

export default Custom404;
