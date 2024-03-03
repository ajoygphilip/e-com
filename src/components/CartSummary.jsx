import { CartSummaryHeader } from '../components/CartSummaryHeader'
import { CartItem } from '../components/CartItem'
import { CartSummaryTotal } from '../components/CartSummaryTotal'
import { getCartTotal, getCartTotalPrice } from '../utils/CartUtils'

export function CartSummary(props) {
  return (
    <div className="p-2 m-2 flex flex-col">
      <CartSummaryHeader />
      <div className="space-y-4">
        {props.cartItems &&
          props.cartItems.map(item => (
            <CartItem key={item.id} product={item} qty={props.cart[item.id]} />
          ))}
      </div>

      <CartSummaryTotal
        cartItemCount={getCartTotal(props.cart, props.cartItems)}
        cartTotalPrice={getCartTotalPrice(props.cart, props.cartItems)}
      />
    </div>
  )
}
