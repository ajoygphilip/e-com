import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../hooks/cartContext'

export default function Cart() {
  const { cart } = useContext(CartContext)
  const [cartItem, setCartItem] = useState([])

  useEffect(() => {
    if (cart != null) {
      getProduct(1).then(data => {
        const existingProduct = cartItem.find(p => p.id === data.id)
        if (!existingProduct) {
          setCartItem(cur => [...cur, data])
        }
      })
    }
  }, [cart])

  return (
    <div className=" p-2  m-2 flex flex-col ">
      <h1 className="text-lg py-2  text-[#484848] font-bold">Your Cart </h1>
      <div className="bg-[#E2E3E7]  py-4 mb-2 flex justify-around">
        <div className=" min-w-[40%] pl-[8%]">Item</div>

        <div className=" min-w-[20%]">Prize</div>
        <div className="  min-w-[20%]">Quantity</div>
        <div className=" min-w-[20%]">Total</div>
      </div>

      <div className=" space-y-4 ">
        {cart &&
          Object.entries(cart).map(([id, qty]) => (
            <CartProduct className=" mb-4" key={id} id={id} qty={qty} />
          ))}
      </div>
      <button className="bg-[#16BA9A] animate-pulse self-end sticky bottom-4 my-2 text-white p-2 item-end">
        Checkout
      </button>
    </div>
  )
}

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json()
  return data
}

function CartProduct({ id, qty }) {
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
