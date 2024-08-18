import React, { useState } from 'react';
import { Boton } from "../buton/buton";

export const Calculadora = () => {
  const [InputFisrt, setInputFisrt] = useState(0);
  const [Inputsecond, setInputsecond] = useState(0);
  const [Result, setResult] = useState(0);

  const Sumar = () =>
  setResult(InputFisrt + Inputsecond);

  const Restar = () => setResult(InputFisrt - Inputsecond);
  const Dividir = () => setResult(InputFisrt / Inputsecond);
  const Multiplicar = () => setResult(InputFisrt * Inputsecond);

  return (
    <>
    <div className='Todo'>
      <input onChange={(event) => setInputFisrt(Number(event.target.value))} type="number" />
      <input onChange={(event) => setInputsecond(Number(event.target.value))} type="number" />
      <h1>Tu resultado es: {Result}</h1>
      <Boton  texto="Sumar" onClick={Sumar}/>
      <Boton texto="Restar" onClick={Restar}/>
      <Boton texto="Dividir" onClick={Dividir}/>
      <Boton texto="Multiplicar" onClick={Multiplicar}/>
      </div>
    </>
  );
}





