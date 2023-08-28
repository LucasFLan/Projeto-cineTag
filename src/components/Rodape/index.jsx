import styles from './Rodape.module.css';
import React from 'react';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <p className={styles.paragrafo}>Desenvolvido por Lucas.</p>
    </footer>
  )
}
