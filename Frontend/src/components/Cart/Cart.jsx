import React, { useState } from 'react'
import './cart.css'
import useCart from '../../hooks/useCart'
import { CartIcon } from '../icons'

export default function Cart () {
  const [visibility, setVisibility] = useState(false)
  const { cart, setCart, clearCart, removeToCart } = useCart()

  const handleChange = () => {
    setVisibility(!visibility)
  }

  return (
    <>
      <input type='checkbox' onChange={handleChange} className='cart-check' />
      {visibility
        ? <aside className='cart-container'>
          <ul className='cart'>
            {cart.map((cartProduct, index) => <li key={cartProduct.id} className='cart-product'>
              <img src={cartProduct.image} alt={cartProduct.title} className='cart-img' />
              <strong>Quantity:{cartProduct.quantity}
                <button onClick={() => {
                  setCart(newCart => [...newCart], cart[index].quantity++)
                }}
                >+
                </button>
                <button onClick={() => {
                  // eslint-disable-next-line no-unused-expressions
                  cartProduct.quantity === 1
                    ? setCart(cart => cart.filter(item => item.id !== cartProduct.id))
                    : setCart(newCart => [...newCart], cart[index].quantity--)
                }}
                >-
                </button>
              </strong>
              <button
                onClick={() => {
                  removeToCart(cartProduct)
                }} className='cart-button'
              >
                <CartIcon />
              </button>
            </li>
            )}
          </ul>

          <div className='cart_buttons-container'>
            <button className='cart_button-buy'>Buy</button>
            <button className='cart_button-remove' onClick={() => clearCart()}>Delete</button>
          </div>
        </aside>
        : ''}
    </>
  )
}
