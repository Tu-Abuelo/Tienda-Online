import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './pages/details/Details'
import Cart from './components/Cart/Cart'
import Home from './pages/home/Home'

function App () {
  return (
    <>
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:productId/:category' element={<Details />} />
      </Routes>

    </>
  )
}

export default App
