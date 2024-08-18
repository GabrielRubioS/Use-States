import React, { useState } from 'react';
import './Background.css'

export const Background = () => {
  const [color, setColor] = useState('#0000');

  const generarColor = () => {
    const colorAleatorio = '#' + (Math.random().toString(16) + '000000').slice(2, 8);
    setColor(colorAleatorio);
  };

  return (
    <div className="Todofondo" style={{ backgroundColor: color }}>
      <h1>Generador De Colores Aleatorios</h1>
      <button onClick={generarColor} type="button" className="btn">
        <strong className='GeneradorColor'>Generar Color</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </div>
  );
};
