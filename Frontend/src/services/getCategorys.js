export default function getCategorys () {
  const API_URL = 'https://fakestoreapi.com/products/categories'
  return fetch(API_URL)
    .then(res => res.json())
    .then(res => {
      const categorys = res

      return categorys
    })
}
