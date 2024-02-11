import { useEffect, useState } from "react";
import "./Product.css";
import React from "react";
import { ProductDetails } from "../../types";

/* 
  Typescript es un superset de javascript, es decir, es javascript con superpoderes.
  Los superpoderes de typescript son los tipos de datos.
  En este caso, estamos definiendo el tipo de dato que va a recibir el componente Product.
  El tipo de dato que va a recibir es un objeto con las propiedades definidas en ProductDetails.
 */
type ProductProps = {
  data: ProductDetails;
  onClick: (id: number) => void;
};

/* 
  type ProductosProps = ProductDetails & {
    extension: string;
  };
 */

/**
 * Componente que muestra un producto a partir de las propiedades que recibe.
 */
const Product = ({ data, onClick }: ProductProps) => {

  return (
    <div className="container">
      <h1>Product</h1>
      <div className="main-container">
        <div className="poster-container">
          <a href="#">
            <img
              src={data.thumbnail}
              alt="Product thumbnail"
              className="poster"
            />
          </a>
        </div>
        <div className="ticket-container">
          <div className="ticket_content">
            <h4 className="articulo">Articulo: {data.title}</h4>
            <p className="category">Categoria: {data.category}</p>

            <p className="description">Marca: {data.brand}</p>
            <p className="category">{data.description}</p>

            <button onClick={() => onClick(data.id)} className="ticket-btn">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
