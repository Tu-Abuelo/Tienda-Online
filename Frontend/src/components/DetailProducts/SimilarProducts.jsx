import './productsDetail.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SimilarProducts ({ products }) {
  return (
    <>
      {products.map(product => <section
        className='similarProducts'
        key={product.id}
                               >
        <Link to={`/detail/${product.id}/${product.category}`} className='similarProducts-img-container'>
          <img className='similarProducts-img' src={product.image} />
        </Link>
        <p className='similarProducts-price'><strong>Price:{product.price}$</strong></p>
                               </section>)}
    </>
  )
}
