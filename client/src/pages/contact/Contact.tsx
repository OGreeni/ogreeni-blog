import React from 'react';

const Contact = () => {
  return (
    <>
      <header>
        <h1>Contact me</h1>
      </header>
      <main>
        <h2>I'll get back to you as soon as I can!</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" required value="jondoe@gmail.com" />
          <input type="text" required />
          <button>Submit</button>
        </form>
      </main>
    </>
  );
};

export default Contact;
