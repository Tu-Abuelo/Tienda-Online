import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export default function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category : "all",
    maxPrice : 1500
  })


  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
