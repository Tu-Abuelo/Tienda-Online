import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './pages/details/Details'
import Cart from './components/Cart/Cart'
import Home from './pages/home/Home'
import CreateProductPage from './pages/createProductPAge/CreateProduct'

function App () {
  return (
    <>
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Detail/:productId/:category' element={<Details />} />
        <Route path='/CreateProduct' element={<CreateProductPage />} />
      </Routes>

    </>
  )
}

export default App
