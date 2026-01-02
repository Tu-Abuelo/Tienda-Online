import './header.css'
import useFilters from '../../hooks/useFilters'
import { CartIcon } from '../icons'
import Categorys from '../Categorys/Categorys'

export default function Header () {
  const { filters, setFilters } = useFilters()

  const handleChangePrice = (e) => {
    setFilters(f => ({ ...f, maxPrice: e.target.value }))
  }

  const handleChangeCategory = (e) => {
    setFilters(f => ({ ...f, category: e.target.value.toLowerCase() }))
  }

  return (
    <header className='header-container'>
      <h1 className='header-title'>Online Shop<CartIcon /></h1>
      <div className='filters-container'>
        <div className='filters_range-container'>
          <label className='filters_range-price'>Max Price:<strong>{filters.maxPrice}</strong></label>
          <input className='filters-range' type='range' min='0' max='1500' defaultValue='1500' onChange={handleChangePrice} />
        </div>
        <Categorys className='filters-categorys' defaultValue='Categorys' onChange={handleChangeCategory} />

      </div>
    </header>
  )
}
