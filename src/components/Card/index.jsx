import styles from './Card.module.css';
import React from 'react';
import iconeFavoritar from './favoritar.png';
import { useFavoritoContext } from 'contexts/Favoritos';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

export default function Card({id, titulo, capa}) {
  const {favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
  return (
    <div className={styles.container}>
        <Link className={styles.link} to={`/${id}`}>
          <img
              className={styles.capa} 
              src={capa} 
              alt={titulo} />
          <h2>{titulo}</h2>
        </Link>
        <img
            className={styles.favoritar} 
            src={icone} 
            alt="Icone de favoritar filme" 
            onClick={() => {
              adicionarFavorito({id, titulo, capa})
            }}
            />
    </div>
  )
}
