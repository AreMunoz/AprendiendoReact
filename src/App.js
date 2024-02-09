import logo from './logo.svg';
import './App.css';
import Component from './Component';
import Product from './Product/Product';
import Signup from './Signup/Signup';

function App() {
  function handlePuchame() {
    console.log("Puchame");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
{/*         <Component>
          <p>Texto de prueba</p>
        </Component>
        <BotonSencillo label={"Puchfdafdadsfame"} onClick={handlePuchame} /> */}
      </header>
      <main>
        <Signup />
        <Product />
      </main>
    </div>
  );
}
/* 
  props es un objeto javascript ademas de los tipos soportados por JSON (string, number, boolean, array, object, null)
  permite funciones
  ejemplo: {
    label: "Puchame"
  }
 */

function BotonSencillo(props) {
  return (
    <button onClick={props.onClick} >{props.label === "Puchame" ? "Puchame" : "No puchame"}</button>
  );
}

function suma(a, b) {
  return a + b;
}
const sumaFlecha = (a, b) => /* return */ a + b;
const sumaFlechaReturn = (a, b) => {
  return a + b;
}


export default App;
