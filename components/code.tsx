import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import styles from './code.module.css';

interface Props {
  className?: string;
  children: string | string[];
}

const Code = ({ className, children }: Props) => {
  let language: string;

  if (className) {
    language = className.replace('lang-', '');

    language === 'js' ? (language = 'javascript') : null;
    language === 'ts' ? (language = 'typescript') : null;
    language === 'py' ? (language = 'python') : null;

    return (
      <SyntaxHighlighter langauge={language}>{children}</SyntaxHighlighter>
    );
  }

  return <code className={styles.code}>{children}</code>;
};

export default Code;
