import logo from './logo.svg';
import './App.css';
import Component from './Component';

function App() {
  function handlePuchame() {
    console.log("Puchame");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component>
          {/* 
            El contenido entre etiquetas de apertura y cierre de un componente se pasa como props.children
           */}
          <p>Texto de prueba</p>
        </Component>
        <BotonSencillo label={"Puchfdafdadsfame"} onClick={handlePuchame} />
      </header>
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
