import React from 'react'
import { NavItem } from '../NavItem/NavItem'

export const Navbar = () => {
    return (
      <nav>
        <div className='TodoHeader'>
          <h4 className='Titulo-PracticandoHooks'>Practicando Hooks</h4>
          <ul>
            <NavItem to='/saludar' content = 'Saludar' />
            <NavItem to='/Calculadora' content = 'UseState-Calculadora'/>
            <NavItem to='/Background' content = 'UseState-Background-Aleatorio' />
            <NavItem to='/Registro' content = 'UseState-Registro' />
            <NavItem to='/Lista-Tareas' content = 'UseState-Lista Tareas' />
            <a href=""></a>
          </ul>
        </div>
      </nav>
    )
}