import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../hooks/cartContext'
import { EmptyCartSummary } from '../components/EmptyCartSummary'
import { CartSummary } from '../components/CartSummary'

export default function Cart() {
  const { cart } = useContext(CartContext)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    if (cart != null) {
      const fetchProducts = async () => {
        const newProducts = await Promise.all(
          Object.keys(cart).map(itemId => getProduct(itemId))
        )
        setCartItems(newProducts)
      }

      fetchProducts()
    }
  }, [cart])

  const isCartEmpty = !cart || Object.keys(cart).length === 0

  if (isCartEmpty) {
    return <EmptyCartSummary />
  } else {
    return <CartSummary cart={cart} cartItems={cartItems} />
  }
}

export async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json()
  return data
}
