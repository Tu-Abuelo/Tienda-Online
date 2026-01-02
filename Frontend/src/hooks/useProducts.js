import { useContext, useEffect } from 'react'
import getProducts from '../services/getProducts'
import { ProductsContext } from '../contexts/products'
import useFilters from './useFilters'

export default function useProducts () {
  const { products, setProducts, limit, setLimit } = useContext(ProductsContext)
  const { filtersProducts } = useFilters()

  useEffect(() => {
    getProducts(limit).then(res => {
      setProducts(res)
    })
  }, [limit])

  const filterProducts = filtersProducts(products)
  return { products, filterProducts, limit, setLimit }
}
