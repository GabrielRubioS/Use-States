import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css'




export const Footer = () => {
  return (
    <> 
    <div className='Iconos'>
      <FaFacebook className='tamaño' />
      <FaInstagram className='tamaño'/>
      <FaWhatsapp className='tamaño'/>
    </div>
    </>
  )
}
