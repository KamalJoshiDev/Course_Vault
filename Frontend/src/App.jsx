import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import StudyMaterials from './Components/StudyMaterials'
import NavBar from './Components/Navbar'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/study" element={<StudyMaterials />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App