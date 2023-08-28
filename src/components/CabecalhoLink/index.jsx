import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';
import React from 'react';

export default function CabecalhoLink({url, children}) {
  return (
    <Link className={styles.link} to={url}>{children}</Link>
  )
}
