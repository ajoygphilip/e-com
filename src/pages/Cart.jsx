import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../hooks/cartContext'
import EmptyCartSummary from '../components/cart/EmptyCartSummary'
import CartSummary from '../components/cart/CartSummary'
import { getProduct } from '../utils/getProduct'

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
