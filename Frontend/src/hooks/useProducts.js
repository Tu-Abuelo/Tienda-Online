import { useContext, useEffect } from 'react'
<<<<<<< HEAD
import getProductsLocal from '../services/getProductsLocal'
import getProductsOnline from '../services/getProductsOnline'
=======
import getProducts from '../services/getProducts'
>>>>>>> 2eb196bf955bf4de9144c7b119cc28a9ac473df7
import { ProductsContext } from '../contexts/products'
import useFilters from './useFilters'

export default function useProducts () {
  const { products, setProducts, limit, setLimit } = useContext(ProductsContext)
  const { filtersProducts } = useFilters()

  useEffect(() => {
<<<<<<< HEAD
    // You can switch between online and local data fetching here switching
    // getProductsOnline or getProductsLocal
    getProductsOnline(limit).then(res => {
=======
    getProducts(limit).then(res => {
>>>>>>> 2eb196bf955bf4de9144c7b119cc28a9ac473df7
      setProducts(res)
    })
  }, [limit])

  const filterProducts = filtersProducts(products)
  return { products, filterProducts, limit, setLimit }
}
