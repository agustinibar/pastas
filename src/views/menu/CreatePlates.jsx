import React, { useState } from 'react';
import styles from './createPlates.module.css';  
import { Navbar } from '../../components/Navbar/Navbar';

export const CreatePlates = ({ receta }) => {
  const [plato, setPlato] = useState([]);
  const [nombrePlato, setNombrePlato] = useState("");
  const [cantidadPlato, setCantidadPlato] = useState(1);

  const agregarPlato = () => {
    const nuevoPlato = {
      nombre: nombrePlato,
      cantidad: cantidadPlato,
    };

    setPlato([...plato, nuevoPlato]);
    setNombrePlato("");
    setCantidadPlato(1);
  };

  return (
    <>
    <Navbar/>
    <div className={styles.platosContainer}>
      <h2>Subdividir Receta</h2>
      <label className={styles.label}>Nombre del Plato</label>
      <input
        className={styles.formInput}
        type="text"
        placeholder="Nombre del plato..."
        value={nombrePlato}
        onChange={(e) => setNombrePlato(e.target.value)}
      ></input>

      <label className={styles.label}>Cantidad de Platos</label>
      <input
        className={styles.formInput}
        type="number"
        placeholder="Cantidad de platos"
        value={cantidadPlato}
        onChange={(e) => setCantidadPlato(e.target.value)}
      ></input>

      <button className={styles.createButton} onClick={agregarPlato}>
        Agregar Plato
      </button>

      <ul>
        {plato.map((plato, index) => (
          <li key={index}>
            {plato.nombre} - Cantidad: {plato.cantidad}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};
