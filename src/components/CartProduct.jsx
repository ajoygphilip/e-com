import { useEffect, useState } from 'react'
import { getProduct } from '../pages/Cart'

export function CartItem({ id, qty }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

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
          />
        </div>
        <div className=" min-w-[20%]">${product.price * qty}</div>
      </div>
    </>
  )
}
