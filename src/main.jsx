import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FiltersProvider from './contexts/filters.jsx'
import ProductsProvider from './contexts/products.jsx'
import CartProvider from './contexts/cart.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ProductsProvider>
      <FiltersProvider>
        <CartProvider>
        <BrowserRouter>
          <App />
          </BrowserRouter>
        </CartProvider>
      </FiltersProvider>
    </ProductsProvider>
  
)
