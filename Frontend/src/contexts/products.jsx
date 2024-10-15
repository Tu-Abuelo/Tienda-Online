import React, { createContext, useState } from 'react'

export const ProductsContext = createContext()

export default function ProductsProvider ({ children }) {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(6)

  return (
    <ProductsContext.Provider value={{ products, setProducts, limit, setLimit }}>
      {children}
    </ProductsContext.Provider>
  )
}
