import { useContext, useEffect, useState } from 'react'
import getProducts from '../services/getProducts'
import { ProductsContext } from '../contexts/products'
import useFilters from './useFilters'

export default function useProducts () {
  const { products, setProducts, limit, setLimit } = useContext(ProductsContext)
  const { filtersProducts } = useFilters()

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res)
    })
  }, [])

  const filterProducts = filtersProducts(products.slice(0, limit))
  return { products, filterProducts, limit, setLimit }
}
