import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../../firebase/config';
import { Navbar } from '../../components/Navbar/Navbar';
import styles from '../chargeProduct/create.module.css';


export const InsertProduct = () => {
    const [nuevoProducto, setNuevoProducto] = useState("");
    const [nuevoCostoUnitario, setNuevoCostoUnitario] = useState("");
    const [nuevaCategoria, setNuevaCategoria] = useState("");
    const [nuevaUnidad, setNuevaUnidad] = useState("");
    const [nuevoProveedor, setNuevoProveedor] = useState("");

   //rutas de informacion:
   const recipesCollectionRef= collection(db, "products"); 
 
   //funcion para crear propiedades
   const onSubmitProp = async () => {
     try {
        
       
         await addDoc(recipesCollectionRef, {
          nombre: nuevoProducto,
          costo: nuevoCostoUnitario,
          categoria: nuevaCategoria,
          unidad: nuevaUnidad,
          nuevoProveedor: nuevoProveedor,
          creator: auth.currentUser.uid
         });
     
 
       // se limpia el estado 
         setNuevoProducto("");
         setNuevoCostoUnitario("");
         setNuevaCategoria("")
         setNuevaUnidad("")
         setNuevoProveedor("")
       alert('El producto se cargo con exito');
     } catch (error) {
       console.log(error)
     }
   };
    return (
      <>
      <Navbar />
      {/* <RawMaterials/> */}
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
      <label className={styles.label}>Categoría</label>
<select
  className={styles.formInput}
  value={nuevaCategoria}
  onChange={(e) => setNuevaCategoria(e.target.value)}
>
  <option value="Pasteleria">Pasteleria</option>
  <option value="Varios">Varios</option>
  <option value="Verduleria">Verduleria</option>
  <option value="Lacteos">Lacteos</option>
  <option value="Carnicos">Carnicos</option>
  <option value="Fruta">Fruta</option>
</select>

<label className={styles.label}>Unidad</label>
<select
  className={styles.formInput}
  value={nuevaUnidad}
  onChange={(e) => setNuevaUnidad(e.target.value)}
>
  <option value="KG">KG</option>
  <option value="UNI">UNI</option>
  <option value="LTS">LTS</option>
</select>
<label className={styles.label}>Proveedor</label>
<input
  className={styles.formInput}
  type="text"
  placeholder="Nombre del proveedor"
  value={nuevoProveedor}
  onChange={(e) => setNuevoProveedor(e.target.value)}
></input>
      <button className={styles.createButton} onClick={onSubmitProp}>
        Insertar Insumo
      </button>
    </div>
      </>
  )
}
