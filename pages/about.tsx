import React from 'react';
import Head from 'next/head';

import styles from './about.module.css';
import Layout from '../components/layout';
import Button from '../components/button';

const About = () => {
  return (
    <Layout about>
      <Head>
        <title>About Me | Omri Green</title>
      </Head>
      <section className={styles.desc}>
        <article>
          <h2>Who am I?</h2>
          <p>
            I'm a <b>full-stack</b> web developer, mainly using the MERN stack.
            As of now, I'm pursuing my software engineering dream by studying
            computer science at <b>Rutgers University</b>.
          </p>
        </article>
        <h3>Download my resume:</h3>
        <a href="http://localhost:8080/resume">
          <Button>Download</Button>
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
