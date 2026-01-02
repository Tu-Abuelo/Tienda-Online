export default function getCategorysLocal () {
  const API_URL = 'http://localhost:1234/categorys'
  return fetch(API_URL)
    .then(res => res.json())
    .then(res => {
      const categorys = res

      return categorys
    })
}
