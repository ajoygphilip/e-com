import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext()

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState()

  useEffect(() => {
    setCart(initializeCart())
  }, [])

  function addToCart(productId, quantity) {
    setCart(prevCart => {
      if (productId in prevCart) {
        const newCart = {
          ...prevCart,
          [productId]: prevCart[productId] + quantity,
        }
        localStorage.setItem('gapbargaincart', JSON.stringify(newCart))
        return newCart
      } else {
        const newCart = { ...prevCart, [productId]: quantity }
        localStorage.setItem('gapbargaincart', JSON.stringify(newCart))
        return newCart
      }
    })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

function initializeCart() {
  if (localStorage.getItem('gapbargaincart') === null) {
    localStorage.setItem('gapbargaincart', JSON.stringify([]))
    return {}
  } else {
    return JSON.parse(localStorage.getItem('gapbargaincart'))
  }
}
