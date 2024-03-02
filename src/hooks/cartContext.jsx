import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext()

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState()

  useEffect(() => {
    setCart(initializeCart())
  }, [])

  useEffect(() => {
    if (cart) {
      localStorage.setItem('gapbargaincart', JSON.stringify(cart))
    }
  }, [cart])

  function addToCart(productId, quantity) {
    setCart(prevCart => {
      if (productId in prevCart) {
        const newCart = {
          ...prevCart,
          [productId]: prevCart[productId] + quantity,
        }
        return newCart
      } else {
        const newCart = { ...prevCart, [productId]: quantity }
        return newCart
      }
    })
  }

  function updateCartItemCount(productId, newCount) {
    if (productId in cart) {
      setCart(prevCart => ({
        ...prevCart,
        [productId]: newCount,
      }))
    }
  }

  function removeCartItem(productId) {
    if (productId in cart) {
      setCart(prevCart => {
        const updatedCart = { ...prevCart }
        delete updatedCart[productId]
        return updatedCart
      })
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCartItemCount, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

function initializeCart() {
  if (!localStorage.getItem('gapbargaincart')) {
    localStorage.setItem('gapbargaincart', JSON.stringify({}))
    return {}
  } else {
    return JSON.parse(localStorage.getItem('gapbargaincart'))
  }
}
