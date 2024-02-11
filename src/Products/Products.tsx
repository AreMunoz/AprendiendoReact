import React, { useEffect } from "react";
import { ProductDetails } from "../../types";
import Product from "../Product/Product.tsx";

const Products = () => {
    const [products, setProducts] = React.useState<ProductDetails[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products);
            })
            .catch((error) => console.log(error))
    }, []);


    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map((product) => (
                    <Product data={product} key={product.id} />
                ))}
            </div>
        </div>
    )
};

export default Products;