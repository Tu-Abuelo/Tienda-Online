import { useContext, useEffect } from 'react'
import getProductsLocal from '../services/getProductsLocal'
import getProductsOnline from '../services/getProductsOnline'
import { ProductsContext } from '../contexts/products'
import useFilters from './useFilters'

export default function useProducts () {
  const { products, setProducts, limit, setLimit } = useContext(ProductsContext)
  const { filtersProducts } = useFilters()

  useEffect(() => {
    // You can switch between online and local data fetching here switching
    // getProductsOnline or getProductsLocal
    getProductsOnline(limit).then(res => {
      setProducts(res)
    })
  }, [limit])

  const filterProducts = filtersProducts(products)
  return { products, filterProducts, limit, setLimit }
}
