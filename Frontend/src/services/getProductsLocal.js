<<<<<<< HEAD:Frontend/src/services/getProductsLocal.js
export default function getProductsLocal (limit = 20) {
  const API_URL_LOCAL = `http://localhost:1234/products?limit=${limit}`

  return fetch(API_URL_LOCAL)
=======
export default function getProducts (limit = 20) {
  const API_URL = `http://localhost:1234/products?limit=${limit}`
  return fetch(API_URL)
>>>>>>> 2eb196bf955bf4de9144c7b119cc28a9ac473df7:Frontend/src/services/getProducts.js
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
