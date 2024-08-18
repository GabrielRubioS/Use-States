import React from 'react' // esto sobra en las versiones actuales
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>)
