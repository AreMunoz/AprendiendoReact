import { useEffect, useState } from "react";
import "./Product.css";
import React from "react";
import { ProductDetails } from "../../types";

type ProductProps = {
  data: ProductDetails;
};

/* 
  type ProductosProps = ProductDetails & {
    extension: string;
  };
 */

const Product = ({ data }: ProductProps) => {
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

            <button className="ticket-btn">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
