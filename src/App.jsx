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
        <Route path='/Tienda-Online/' element={<Home />} />
        <Route path='/Detail/:productId/:category' element={<Details />} />
      </Routes>

    </>
  )
}

export default App
