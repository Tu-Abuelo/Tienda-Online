import { useEffect, useState } from 'react'
import getCategorysLocal from '../services/getCategorysLocal'
import getCategorysOnline from '../services/getCategorysOnline'

export default function useCategorys () {
  const [categorys, setCategorys] = useState()

  useEffect(() => {
    // You can switch between online and local data fetching here switching
    // getCategorysOnline or getCategorysLocal
    getCategorysOnline().then(res => setCategorys(res))
  }, [])

  return categorys
}
