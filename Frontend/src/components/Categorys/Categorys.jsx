import useCategorys from '../../hooks/useCategorys'

export default function Categorys ({ defaultValue, onChange, className }) {
  const categorys = useCategorys()

  return (
    <select className={className} onChange={onChange} defaultValue={`${defaultValue}`}>
      <option disabled>Categorys</option>
      {defaultValue !== undefined ? <option value='all'>All</option> : ''}
      {
      categorys !== undefined
        ? categorys.map(category => <option
            key={category}
            value={category}
                                    >{category[0].toUpperCase().concat(category.slice(1))}
                                    </option>)
        : ''
        }
    </select>
  )
}
