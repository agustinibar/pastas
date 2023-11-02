import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../../firebase/config';
import { Navbar } from '../../components/Navbar/Navbar';
import styles from '../create/create.module.css';
import { RawMaterials } from '../../components/RawMaterials/RawMaterials';

export const InsertProduct = () => {
    const [nuevoProducto, setNuevoProducto] = useState([]);
    const [nuevoCostoUnitario, setNuevoCostoUnitario] = useState("");
    const [nuevoCostoMayoritario, setNuevoCostoMayoritario] = useState("");
    const [costoPorEnvio, setCostoPorEnvio] = useState("");
    const [costosExtra, setCostosExtra] = useState("");
    const [beneficiosDecuentos, setBeneficiosDescuentos] = useState("");
    const [proveedor, setProveedor] = useState([]);
  
   //rutas de informacion:
   const recipesCollectionRef= collection(db, "recipes"); 
 
   //funcion para crear propiedades
   const onSubmitProp = async () => {
     try {
        
       
         await addDoc(recipesCollectionRef, {
           nombre: nuevoProducto,
           costoPorUnidad: nuevoCostoUnitario,
           costoPorMayor: nuevoCostoMayoritario,
           costoPorEnvio: costoPorEnvio,
           costoExtra: costosExtra,
           beneficiosDecuentos: beneficiosDecuentos,
           proveedor: proveedor,
           userId: auth?.currentUser?.uid,
         });
     
 
       // se limpia el estado 
         setNuevoProducto([]);
         setNuevoCostoUnitario("");
         setNuevoCostoMayoritario("");
         setCostoPorEnvio("");
         setCostosExtra("");
         setBeneficiosDescuentos("");
         setProveedor([])
       alert('El producto se cargo con exito');
     } catch (error) {
       console.log(error)
     }
   };
    return (
      <>
      <Navbar />
      <RawMaterials/>
      <div className={styles.createContainer}>
      <h1>Inserte los datos del producto:</h1>
      <label className={styles.label}>Producto</label>
      <input
        className={styles.formInput}
        type='text'
        placeholder="Nombre del producto... "
        onChange={(e) => setNuevoProducto(e.target.value)}
      ></input>
      <label className={styles.label}>Costos x unidad</label>
      <input
        className={styles.formInput}
        type='number'
        placeholder="Costo unitario"
        onChange={(e) => setNuevoCostoUnitario(e.target.value)}
      ></input>
      <label className={styles.label}>Costos x Mayor</label>
      <input
        className={styles.formInput}
        placeholder="Costo x mayor..."
        type='number'
        onChange={(e) => setNuevoCostoMayoritario(e.target.value)}
      ></input>
      <label className={styles.label}>Costos de Envio</label>
      <input
        className={styles.formInput}
        placeholder="Costo de envio..."
        type='number'
        onChange={(e) => setCostoPorEnvio(e.target.value)}
      ></input>
      <label className={styles.label}>Costos Extra</label>
      <input
        className={styles.formInput}
        placeholder="Costos extra..."
        type='number'
        onChange={(e) => setCostosExtra(e.target.value)}
      ></input>
      <label className={styles.label}>Beneficios y decuentos:</label>
      <input
        className={styles.formInput}
        placeholder="Beneficios/descuentos"
        type='number'
        onChange={(e) => setBeneficiosDescuentos(e.target.value)}
      ></input>
      <label className={styles.label}>Proveedor:</label>
      <select
        className={styles.formSelect}
        value={proveedor}
        onChange={(e) => setProveedor(e.target.value)}
      >
        <option value="">Seleccionar proveedor</option>
        <option value="CHINO">CHINOS</option>
        <option value="CARREFOUR">CARREFOUR</option>
        <option value="MAXICONSUMO">MAXICONSUMO</option>
      </select>
      <button className={styles.createButton} onClick={onSubmitProp}>
        Insertar Insumo
      </button>
    </div>
      </>
  )
}
