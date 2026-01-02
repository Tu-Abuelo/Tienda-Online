export default function getProductsOnline (limit = 20) {
  const API_URL_ONLINE = 'https://fakestoreapi.com/products'

  return fetch(API_URL_ONLINE)
    .then(res => res.json())
    .then(res => {
      const products = res.map(product => {
        const { id, title, description, price, image, category } = product
        const quantity = 1
        return { id, description, title, price, image, category, quantity }
      })
      return products.slice(0, limit)
    })
}
