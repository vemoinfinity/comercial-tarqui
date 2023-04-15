import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navegator from './assets/components/Navegator'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Home from './pages/Home'
import Location from './pages/Location'


function App() {
  

  return (
    <HashRouter>
      <Navegator/>
    <Container className="App mt-5 pt-5">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>
      </Routes>   
    </Container>
    </HashRouter>
  )
}

export default App
