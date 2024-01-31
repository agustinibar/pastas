import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import styles from './createRecipes.module.css';

export const CreateRecipes = () => {
  const [nuevaReceta, setNuevaReceta] = useState("");
  const [productos, setProductos] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);
  const [cantidadIngrediente, setCantidadIngrediente] = useState(0);
  const [costoTotalReceta, setCostoTotalReceta] = useState(0);
  const [productoSeleccionado, setProductoSeleccionado] = useState(""); 

  const recipesCollectionRef = collection(db, "recipes");
  const productsCollectionRef = collection(db, "products");

  const getProducts = async () => {
    try {
      const productSnapshot = await getDocs(productsCollectionRef);
      const productsList = productSnapshot.docs.map((doc) => doc.data());
      setProductos(productsList);
    } catch (error) {
      console.error("No se pueden obtener los productos:" + error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const agregarIngrediente = () => {
    const costoIngrediente = productos.find((p) => p.nombre === productoSeleccionado).costo;
    setIngredientes([...ingredientes, { nombre: productoSeleccionado, cantidad: cantidadIngrediente, costo: costoIngrediente }]);
    setCostoTotalReceta(costoTotalReceta + cantidadIngrediente * costoIngrediente);
    setCantidadIngrediente(0);
  };

  const onSubmitRecipe = async () => {
    try {
      await addDoc(recipesCollectionRef, {
        nombre: nuevaReceta,
        ingredientes: ingredientes,
        costoTotal: costoTotalReceta
      });

      setNuevaReceta("");
      setIngredientes([]);

      alert("La receta fue creada con éxito");
    } catch (error) {
      console.error("onSubmitRecipe no funciona: " + error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.createRecipeContainer}>
      <h1>Crear Receta</h1>
        <label className={styles.label}>Seleccionar Producto</label>
        <select
          className={styles.formInput}
          value={productoSeleccionado}
          onChange={(e) => setProductoSeleccionado(e.target.value)}
        >
          <option value="">Seleccionar Producto</option>
          {productos.map((producto) => (
            <option key={producto.nombre} value={producto.nombre}>
              {producto.nombre}
            </option>
          ))}
        </select>

        <label className={styles.label}>Cantidad del Ingrediente</label>
        <input
          className={styles.formInput}
          type="number"
          placeholder="Cantidad"
          value={cantidadIngrediente}
          onChange={(e) => setCantidadIngrediente(e.target.value)}
        ></input>

        <button className={styles.createButton} onClick={agregarIngrediente}>
          Agregar Ingrediente
        </button>

        <ul>
          {ingredientes.map((ingrediente, index) => (
            <li key={index}>
              {ingrediente.nombre} - Cantidad: {ingrediente.cantidad} - Costo: ${ingrediente.costo * ingrediente.cantidad}
            </li>
          ))}
        </ul>
          
          <label className={styles.label}>Nombre de la Receta</label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Nombre de la receta..."
            value={nuevaReceta}
            onChange={(e) => setNuevaReceta(e.target.value)}
          ></input>

        <p>Costo Total de la Receta: ${costoTotalReceta}</p>

        <button className={styles.createButton} onClick={onSubmitRecipe}>
          Crear Receta
        </button>
      </div>
    </div>
  );
};
