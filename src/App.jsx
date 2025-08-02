import { useState } from 'react'
import './App.css'
import Home from "/src/pages/Home"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './pages/Navbar'
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/navbar' element={<Navbar/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
