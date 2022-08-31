import React from 'react';
import Head from 'next/head';

import Layout from '../components/layout';
import styles from './about.module.css';

const About = () => {
  return (
    <Layout about>
      <Head>
        <title>About Me | Omri Green</title>
      </Head>
      <section className={styles.desc}>
        <p>
          I'm a full-stack web developer, mainly using the MERN stack. As of
          now, I'm pursuing my software engineering dream by studying computer
          science at Rutgers University.
        </p>
        <h2>Download my resume:</h2>
        <a href="http://localhost:8080/resume">
          <button>Download</button>
        </a>
      </section>
    </Layout>
  );
};

export default About;

// const Home = () => {
//   return (
//     <Layout home>
//       <Head>
//         <title>Home | Omri Green</title>
//       </Head>
//       <section className={styles.desc}>
//         <p>
//           I'm a software developer and student at <b>Rutgers University</b>,
//           passionate about all-things web dev.
//         </p>
//       </section>
//     </Layout>
//   );
// };

// export default Home;
