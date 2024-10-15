import { useEffect, useState } from 'react'
import getCategorys from '../services/getCategorys'

export default function useCategorys () {
  const [categorys, setCategorys] = useState()

  useEffect(() => {
    getCategorys().then(res => setCategorys(res))
  }, [])

  return categorys
}
