import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import styles from '../RawMaterials/RawMaterials.module.css';

export const RawMaterials = () => {
    const [rawMaterials, setRawMaterials] = useState([]);
  
    useEffect(() => {
      const getRawMaterialsList = async () => {
        try {
          // Obtén una referencia a la colección "recipes" en Firestore
          const rawMaterialsRef = collection(db, 'recipes');
  
          // Realiza una consulta para obtener todos los productos
          const querySnapshot = await getDocs(rawMaterialsRef);
          const rawData = [];
  
          querySnapshot.forEach((doc) => {
            const productData = doc.data();
            rawData.push(productData);
          });
  
          // Organiza los datos en un objeto donde la clave es el nombre del producto
          const productMap = rawData.reduce((acc, product) => {
            const { nombre, proveedor, costoPorUnidad, costoPorMayor, costoPorEnvio, costoExtra } = product;
            if (!acc[nombre]) {
              acc[nombre] = [];
            }
            acc[nombre].push({ proveedor, costoPorUnidad, costoPorMayor, costoPorEnvio, costoExtra });
            return acc;
          }, {});
  
          setRawMaterials(productMap);
        } catch (error) {
          console.log(error);
        }
      };
      getRawMaterialsList();
    }, []);
  
    return (
        <div className={styles.container}>
        {Object.keys(rawMaterials).map((nombreProducto, productIndex) => (
          <div key={nombreProducto}>
            <h2 className={styles.productTitle}>{nombreProducto}</h2>
            {rawMaterials[nombreProducto].map((producto, providerIndex) => (
              <div
                key={providerIndex}
                className={`${styles.details} ${styles['provider' + producto.proveedor]}`}
              >
                <h3 className={styles.providerTitle}>{producto.proveedor}</h3>
                <p className={styles.priceDetail}>Precio unidad: {producto.costoPorUnidad}</p>
                <p className={styles.priceDetail}>Precio mayor: {producto.costoPorMayor}</p>
                <p className={styles.priceDetail}>Costo envío: {producto.costoPorEnvio}</p>
                <p className={styles.priceDetail}>Costo extra: {producto.costoExtra}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };