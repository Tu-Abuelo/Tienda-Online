import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters'

export default function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filtersProducts = (products) => {
    if (products === undefined) return
    return products.filter(product => {
      return (
        product.price <= filters.maxPrice &&
            (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filters, setFilters, filtersProducts }
}
