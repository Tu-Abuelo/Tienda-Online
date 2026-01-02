import React from 'react'
import './createProduct.css'
import Categorys from '../../components/Categorys/Categorys'

export default function CreateProductPage () {
  return (
    <>
      <main className='createProduct-container'>
        <form method='post' action='http://localhost:1234/products' className='createProduct'>
          <label className='createProduct-img_container'>
            <span>+</span>
            <input className='createProduct-img' type='file' accept='image/*' />
          </label>
          <input placeholder='Product tittle' className='createProduct-tittle' />
          <input placeholder='Product description' className='createProduct-description' />
          <input placeholder='Product price' className='createProduct-price' />
          <Categorys className='createProduct-category' />
          <button>Create Product</button>
        </form>
      </main>
    </>
  )
}
