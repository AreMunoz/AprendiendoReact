import React, { useEffect } from "react";
import { ProductDetails } from "../../types";
import Product from "../Product/Product.tsx";

const Products = () => {
    const [products, setProducts] = React.useState<ProductDetails[]>([]);

    /**
     * Ejemplo de useEffect sin dependencias
     * Sólo se ejecuta una vez, cuando el componente se monta.
     */
    useEffect(() => {
        console.log("Componente montado");
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products);
            })
            .catch((error) => console.log(error))
    }, []);

    /**
     * Ejemplo de useEffect con dependencias
     * Sólo se ejecuta cuando products cambia.
     */
    useEffect(() => {
        console.log("Productos actualizados");
        console.log(products);
        // Actualizar BD
    }, [products]);

    const handleOnClick = (id: number) => {
        // Esta función elimina el producto clickeado
        console.log("Producto eliminado");

        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
    }


    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map((product) => (
                    /* 
                        Convertimos el objeto product en un componente Product.
                     */
                    <Product data={product} key={product.id} onClick={handleOnClick} />
                ))}
            </div>
        </div>
    )
};

export default Products;

/**
 * Actividad 1:
 *  1) Crear un nuevo componente llamado FormularioProducto.tsx
 *  2) El componente debe tener un formulario con los siguientes campos de ProductDetails
 *  3) El formulario debe tener un botón para guardar el producto
 *  4) Al guardar el producto, el formulario debe limpiarse y la lista de productos debe actualizarse
 */