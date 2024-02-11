import { useEffect, useState } from "react";
import './Product.css';
/**
 * RESPUESTA:
 * {
   "id":1,
   "title":"iPhone 9",
   "description":"An apple mobile which is nothing like apple",
   "price":549,
   "discountPercentage":12.96,
   "rating":4.69,
   "stock":94,
   "brand":"Apple",
   "category":"smartphones",
   "thumbnail":"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
   "images":[
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
   ]
  }
 */

const Product = () => {
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    console.log("Componente montado");
    getProductInfo();
  }, []);

  const getProductInfo = () => {
    fetch('https://dummyjson.com/products/1', {
      method: "GET"
    }) // Fetch A:
      .then(response => response.json())
      .then(data => {
        console.log(data) // Console log de A
        setProductDetails(data)
      })
      .catch(error => console.log(error))
  }



  return (
    <div className="container">
      <h1>Product</h1>
      <div class="main-container">
        <div class="poster-container">
          <a href="#"><img src={productDetails?.thumbnail} alt="Product thumbnail" class="poster" /></a>
        </div>
        <div class="ticket-container">
          <div class="ticket_content">
            <h4 class="articulo">Articulo: {productDetails?.title}</h4>
            <p class="category">
              Categoria: {productDetails?.category}
            </p>

            <p class="description">Marca: {productDetails?.brand}</p>
            <p className="category">{productDetails?.description}</p>

            <button class="ticket-btn">Buy now</button>
          </div>
        </div>

      </div>


    </div>
  );
}

export default Product;