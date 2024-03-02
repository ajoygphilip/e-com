import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../hooks/cartContext'
import { CartSummaryHeader } from '../components/CartSummaryHeader'
import { CartItem } from '../components/CartProduct'
import { CartSummaryTotal } from '../components/CartSummaryTotal'
import { CartCheckoutButton } from '../components/CartCheckoutButton'
import { getCartTotal, getCartTotalPrice } from '../utils/CartUtils'

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
    return <p>Your cart is empty.</p>
  }

  return (
    <div className="p-2 m-2 flex flex-col">
      <CartSummaryHeader />

      <div className="space-y-4">
        {cartItems.map(item => (
          <CartItem key={item.id} id={item.id} qty={cart[item.id]} />
        ))}
      </div>

      <CartSummaryTotal
        cartItemCount={getCartTotal(cart, cartItems)}
        cartTotalPrice={getCartTotalPrice(cart, cartItems)}
      />
    </div>
  )
}

export async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json()
  return data
}
