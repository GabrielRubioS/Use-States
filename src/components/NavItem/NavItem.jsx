import React from 'react'
import { Link } from 'react-router-dom'

export const NavItem = ({ to, content }) => (<li><Link to={to}>{content}</Link></li>)

