import { useState } from 'react'
import './App.css'
import Home from "/src/pages/Home"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './pages/Navbar'
import About from './pages/About';
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from './pages/Footer'
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/navbar' element={<Navbar/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/footer' element={<Footer/>}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
