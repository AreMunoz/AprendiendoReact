import React, {useEffect, useState} from 'react'

// Esto convierte a la función en una función impura
/* let datosUsuario = {
  nombre: "Pepe",
  apellido: "Perez",
  edad: 25
} */

// Servicio REST: https://dummyjson.com/products/1

export default function Component(props) {
    //propiedades
    const [text, setText] = useState()
    const [updated, setUpdated] = useState()
    
    const textOnChange = (event) => {
        setText(event.target.value)
    }

    const buttonOnClick = () => {
        setUpdated(text)
    }

    useEffect(() => {
        console.log("Componente montado")

        return () => {
            console.log("Componente desmontado")
        }
    }, []);

  return (
    <div>
        <input type="text" value={text} onChange={textOnChange} name="" id="" />
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>texto input: {text}</p>
        <p>texto actualizado: {updated}</p>
        {/* props = {
          nombre: "Pepe",
        } */}
        <Usuario nombre={updated} />
    </div>
  )
}

function Usuario(props) {
  return (
    <div>
      <p>Nombre: {props.nombre}</p>
    </div>
  )
}

// Una función pura es una función que para un mismo input siempre devuelve el mismo output
// f(x) = 5 + x

// Una función impura es una función que para un mismo input puede devolver distintos outputs
// f(x) = 5 + x + Math.random() * 10
