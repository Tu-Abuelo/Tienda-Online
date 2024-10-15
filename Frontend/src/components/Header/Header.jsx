import './header.css'
import useFilters from '../../hooks/useFilters'
import useCategorys from '../../hooks/useCategorys'
import { CartIcon } from '../icons'

export default function Header () {
  const { filters, setFilters } = useFilters()
  const categorys = useCategorys()

  const handleChangePrice = (e) => {
    setFilters(f => ({ ...f, maxPrice: e.target.value }))
  }

  const handleChangeCategory = (e) => {
    setFilters(f => ({ ...f, category: e.target.value }))
  }

  return (
    <header className='header-container'>
      <h1 className='header-title'>Online Shop<CartIcon /></h1>
      <div className='filters-container'>
        <div className='filters_range-container'>
          <label className='filters_range-price'>Max Price:<strong>{filters.maxPrice}</strong></label>
          <input className='filters-range' type='range' min='0' max='1500' defaultValue='1500' onChange={handleChangePrice} />
        </div>
        <select className='filters-categorys' onChange={handleChangeCategory}>
          <option className='filters_categorys-options' disabled defaultValue='all' selected>Categorys</option>
          <option className='filters_categorys-options' value='all'>all</option>
          {
            categorys !== undefined
              ? categorys.map(category => <option
                  key={category}
                  className='filters_categorys-options'
                  value={category}
                                          >{category}
              </option>)
              : ''
              }
        </select>

      </div>
    </header>
  )
}
