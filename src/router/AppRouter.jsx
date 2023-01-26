import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/about/About'
import Details from '../pages/details/Details'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path ='/details' element={<Details/>}/>
        </Routes>

        
      </BrowserRouter>
    </>
  )
}

export default AppRouter