import React from 'react'
import styles from './products.module.css'
import { Navbar } from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

export const Products = () => {
  return (
    <>
      <Navbar/>
    <div className={styles.homeContainer}>
      <h1 className={styles.centeredH1}>Pastas, salsas y recetario: </h1>

      <div className={styles.cardContainer}>

        <Link to="/products/insert" className={styles.card}>
          <h2>Inserte Nuevos Productos Productos</h2>
        </Link>
        <Link to="/products/list" className={styles.card}>
          <h2>Lista de Productos</h2>
        </Link>
      </div>
    </div>
    </>
  )
}
