import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export default function useCart () {
  const { cart, setCart } = useContext(CartContext)
  const CartIds = cart.map(products => products.id)

  const addToCart = (product) => {
    if (CartIds.includes(product.id)) return
    setCart(cartItems => cartItems.concat(product))
  }

  const removeToCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const checkIfInCart = (product) => {
    return cart.some(item => product.id === item.id)
  }

  return { cart, setCart, addToCart, clearCart, checkIfInCart, removeToCart }
}
