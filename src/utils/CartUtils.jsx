export function getCartTotal(cart, cartItems) {
  if (!cart || !cartItems) return 0

  let total = 0
  cartItems.forEach(item => {
    total += cart[item.id]
  })

  return total
}
export function getCartTotalPrice(cart, cartItems) {
  let totalPrice = 0
  cartItems.forEach(item => {
    totalPrice += item.price * cart[item.id]
  })
  return totalPrice
}
