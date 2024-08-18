import React from "react";
import './buton.css'


export function Boton({ texto, onClick }) {
  return (
        <button className="ClaseBoton" onClick={onClick}>{texto}</button>
  );
}