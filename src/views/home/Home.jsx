import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import styles from '../home/home.module.css';
import { Link } from 'react-router-dom';
import foodStorage from '../../assets/foodStorage.jpg';
import recipes from '../../assets/recipes.jpg'
import prices from '../../assets/prices.jpg';
import menu from '../../assets/menu.jpg'

export const Home = () => {
  

  return (
    <>
    <Navbar />
    <div className={styles.homeContainer}>
      <h1 className={styles.centeredH1}>Pastas, salsas y recetario: </h1>

      <div className={styles.cardContainer}>

        <Link to="/post" className={styles.card}>
          <img src={foodStorage} alt="img" />
          <h2>Productos</h2>
          <p>Inserte productos nuevos o revise/actualice la lista de productos ya costeados</p>
        </Link>
        <Link to="/recipe" className={styles.card}>
            <img src={recipes} alt="img" />
          <h2>Recetas</h2>
          <p>Inserte recetas nuevas o revise/actualice la lista de recetas ya creadas</p>
        </Link>
        <Link to="/prices" className={styles.card}>
          <img src={prices} alt="img" />
          <h2>Precios</h2>
          <p>Checkee los precios de las recetas para poder sacar la cotizacion de un pedido variado</p>
        </Link>
        <Link to="/menu" className={styles.card}>
          <img src={menu} alt="img" />
          <h2>Menú</h2>
          <p>Productos que actualmente estan insertados, costeados y produciendose</p>
        </Link>
      </div>
    </div>
  </>
  )
}
