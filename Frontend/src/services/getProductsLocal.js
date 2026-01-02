export default function getProductsLocal (limit = 20) {
  const API_URL_LOCAL = `http://localhost:1234/products?limit=${limit}`

  return fetch(API_URL_LOCAL)
    .then(res => res.json())
    .then(res => {
      const products = res.map(product => {
        const { id, title, description, price, image, category } = product
        const quantity = 1
        return { id, description, title, price, image, category, quantity }
      })

      return products
    })
}
