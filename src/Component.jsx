import React, {useState} from 'react'

export default function Component() {

    //propiedades
    const [text, setText] = useState()
    const [updated, setUpdated] = useState()
    

    const textOnChange = (event) => {
        setText(event.target.value)
    }

    const buttonOnClick = () => {
        setUpdated(text)
    }


  return (
    <div>
        <input type="text" value={text} onChange={textOnChange} name="" id="" />
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>texto input: {text}</p>
        <p>texto actualizado: {updated}</p>

    </div>
  )
}
