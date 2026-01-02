import './listOfProducts.css'
import React from 'react'
import Product from './Product'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import { Link } from 'react-router-dom'

export default function ListOfProducts ({ products }) {
  const { addToCart, checkIfInCart, removeToCart } = useCart()
  const { limit, setLimit } = useProducts()

  return (
    <>
      <main className='products-container'>
        {
       products.length === 0
         ? <h3 className='no-products'>Products not found</h3>
         : products.map(product => {
           const IsProductInCart = checkIfInCart(product)
           return (
             <Product
               key={product.id}
               productId={product.id}
               productCategory={product.category}
               check={IsProductInCart}
               image={product.image}
               title={product.title}
               price={product.price}
               handdleBuy={() => {
                 removeToCart(product)
                 addToCart(product)
               }}
             />
           )
         }
         )

          }
      </main>
      <div className='products-lazyLoud-container'>
        {
         products.length === 0
           ? ''
           : limit <= products.length
             ? <button onClick={() => { setLimit(page => page + 6) }} className='products-lazyLoud'>More Products</button>
             : <h3 className='no-products'>No hay mas productos {/* <Link className='products-create_product' to='/CreateProduct'>Deseas crearlo?</Link> */}</h3>
}
      </div>
    </>
  )
}
