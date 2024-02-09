import { useEffect, useState } from "react";
import './Product.css';

const Product = () => {
  const [data, setData] = useState();

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
            setData(data)
        })
        .catch(error => console.log(error))
}

  return (
    <div className="container">
      <h1>Product</h1>
      <p>Marca: {data?.brand}</p>
    </div>
  );
}

export default Product;