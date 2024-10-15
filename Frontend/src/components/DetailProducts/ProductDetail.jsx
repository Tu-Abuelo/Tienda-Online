import { CartIcon } from '../icons'
import './productsDetail.css'
import React from 'react'

export default function ProductDetail ({ title, price, description, image, onClick, check }) {
  return (
    <section className='productsDetail'>
      <picture className='productsDetail_img-container'><img className='productsDetail-img' src={image} alt={title} /></picture>
      <div className='productsDetailInfo-container'>
        <p className='productsDetail-title'>{title}</p>
        <p className='productsDetail-description'>{description}</p>
        <p className='productsDetail-price'><strong>{price}$</strong></p>
        <button
          className={`products-buy ${check ? 'noCheck' : 'check'}`}
          onClick={onClick}
        ><CartIcon />
        </button>
      </div>
    </section>

  )
}
