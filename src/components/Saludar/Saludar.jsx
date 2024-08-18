import React, { useState } from 'react'
import { Boton } from "../buton/buton";


export const Saludar = () => {
    const [InputName, setInputName] = useState('')
const [name, setName] = useState('Usuario')
const handleSetName= () =>setName(InputName)

    return (
    <>
    <div className='Todo'>
        <h2>BIENVENIDO {name}</h2>
        <input
        type="text" 
        placeholder="Escribe algo..." 
        value={InputName}
        onChange={(event)=>setInputName(event.target.value) } />
    <Boton 
        texto="Saludar" 
        onClick={handleSetName} 
      />
    </div>
    </>
)
}