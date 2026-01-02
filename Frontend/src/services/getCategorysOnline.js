export default function getCategorysOnline () {
  const API_URL_ONLINE = 'https://fakestoreapi.com/products'

  return fetch(API_URL_ONLINE)
    .then(res => res.json())
    .then(res => {
      const categorys = res.map(product => {
        const category = product.category
        return category
      })

      console.log('Fetched categorys online:', categorys)
      const newCategorys = [...new Set(categorys)]
      return newCategorys
    })
}
