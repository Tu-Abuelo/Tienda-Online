import React from 'react'
import { Link } from 'react-router-dom'
import { CartIcon } from '../icons'

function Product ({ productCategory, productId, image, title, price, handdleBuy, check }) {
  return (
    <section className='products'>
      <Link to={`/detail/${productId}/${productCategory}`} className='products_img-container'><img className='products-img' src={image} alt={title} /></Link>
      <p className='products-title'>{title}</p>
      <p className='products-price'><strong>{price}$</strong></p>
      <button className={`products-buy ${check ? 'noCheck' : 'check'}`} onClick={handdleBuy}>
        <CartIcon />
      </button>
    </section>
  )
}

export default React.memo(Product)
