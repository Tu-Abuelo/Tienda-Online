import './details.css'
import { Link, useParams } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import useCart from '../../hooks/useCart'
import ProductDetail from '../../components/DetailProducts/ProductDetail'
import SimilarProducts from '../../components/DetailProducts/SimilarProducts'

export default function Details () {
  const { productId, category } = useParams()
  const { products } = useProducts()
  const { addToCart, removeToCart, checkIfInCart } = useCart()

  const getProductsDetail = (products) => {
    return products.filter(detail => {
      return (
        detail.id == productId
      )
    })
  }

  const getSimilarProducts = (products) => {
    return products.filter(detail => {
      return (
        detail.category == category && detail.id != productId
      )
    })
  }

  const productDetail = getProductsDetail(products)
  const similarProduct = getSimilarProducts(products)

  return (
    <>
      {
      productDetail.length == 0
        ? <main className='productsDetail-container'>
          <Link className='home' to='/'>🔙 Return to Home</Link>
          <h3>Not product select</h3>
          </main>
        : <>
          <main className='productsDetail-container'>
            <Link className='home' to='/'>🔙 Return to Home</Link>
            <ProductDetail
              description={productDetail[0].description}
              title={productDetail[0].title}
              image={productDetail[0].image}
              price={productDetail[0].price}
              check={checkIfInCart(productDetail[0])}
              onClick={() => {
                removeToCart(productDetail[0])
                addToCart(productDetail[0])
              }}
            />
          </main>

          <footer className='similarProducts-container'>
            <h1>Similar Products</h1>
            <main>
              <SimilarProducts products={similarProduct} />
            </main>
          </footer>
          </>
      }
    </>
  )
}
