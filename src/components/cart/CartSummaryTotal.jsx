import CartCheckoutButton from './CartCheckoutButton'

export default function CartSummaryTotal({ cartItemCount, cartTotalPrice }) {
  return (
    <div className="flex flex-col pr-[20%] bg-[#E2E3E7] py-4 my-4">
      <p className="self-end">
        Total ({cartItemCount}) items:{' '}
        <span className="text-[#D22D32] font-bold text-xl">
          ${cartTotalPrice.toFixed(2)}
        </span>
      </p>

      <CartCheckoutButton></CartCheckoutButton>
    </div>
  )
}
