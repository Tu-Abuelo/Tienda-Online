<<<<<<< HEAD:Frontend/src/services/getCategorysLocal.js
export default function getCategorysLocal () {
=======
export default function getCategorys () {
>>>>>>> 2eb196bf955bf4de9144c7b119cc28a9ac473df7:Frontend/src/services/getCategorys.js
  const API_URL = 'http://localhost:1234/categorys'
  return fetch(API_URL)
    .then(res => res.json())
    .then(res => {
      const categorys = res

      return categorys
    })
}
