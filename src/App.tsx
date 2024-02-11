import logo from "./logo.svg";
import "./App.css";
import Component from "./Component.tsx";
import Product from "./Product/Product.tsx";
import Signup from "./Signup/Signup.tsx";
import React from "react";
import Products from "./Products/Products.tsx";
import Counter from "./Counter/Counter.tsx";

function App() {
  function handlePuchame() {
    console.log("Puchame");
  }

  return (
    <div className="App">
      {/*         <Component>
          <p>Texto de prueba</p>
        </Component>
        <BotonSencillo label={"Puchfdafdadsfame"} onClick={handlePuchame} /> */}
      <main>
        {/* <Signup /> */}
        <Counter />
        <Products />
      </main>
    </div>
  );
}

export default App;
