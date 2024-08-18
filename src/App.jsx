import { Routes, Route } from 'react-router'
import { Home } from './pages/Home/Home'
import { Saludar } from './components/Saludar/Saludar'
import { Calculadora } from "./components/Calculadora/Calculadora";
import { Header } from './layouts/Header/Header';
import { Background } from './components/Background/Background';
import { Tareas } from './components/Tareas/Tareas';
import { Registro } from './components/Registro/Registro';
import { NotFound } from "./pages/Home/NotFound/NotFound";






export const App = () => {

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/saludar' element={<Saludar/>}/>
      <Route path='/Calculadora' element={<Calculadora/>}/>
      <Route path='/Background' element={<Background/>}/>
      <Route path='/Registro' element={<Registro/>}/>
      <Route path='/Lista-Tareas' element={<Tareas/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

