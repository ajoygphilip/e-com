import { useContext, useEffect, useState } from 'react'
import { getProduct } from '../pages/Cart'
import { CartContext } from '../hooks/cartContext'

export function CartItem({ id, qty }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { updateCartItemCount, removeCartItem } = useContext(CartContext)

  useEffect(() => {
    getProduct(parseInt(id)).then(data => {
      setProduct(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <div className="flex pl-4 items-center">
        <div className="  flex  gap-4 min-w-[40%]">
          <img
            className="size-2 p-0 m-0 self-center cursor-pointer"
            src="assets/delete-button.svg"
            alt="Remove Item"
            onClick={e => {
              removeCartItem(product.id)
            }}
          />
          <div className="max-h-[100px] max-w-[100px] h-[100px] w-[100px] p-1 border border-slate-200 flex justify-center items-center flex-[40%]">
            <img src={product.thumbnail} alt="" />
          </div>
          <div className="text-wrap self-center ">{product.title}</div>
        </div>
        <div className="  min-w-[20%]">${product.price}</div>
        <div className="  min-w-[20%]">
          <input
            type="number"
            className="border text-center"
            min={1}
            step={1}
            defaultValue={qty}
            onBlur={e =>
              updateCartItemCount(product.id, parseInt(e.target.value))
            }
          />
        </div>
        <div className=" min-w-[20%]">${product.price * qty}</div>
      </div>
    </>
  )
}
