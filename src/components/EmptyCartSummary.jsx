import { Link } from 'react-router-dom'

export function EmptyCartSummary() {
  return (
    <div className="flex items-center">
      <img src="assets/empty-cart.png" alt="" />
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <h2 className="text-2xl">Your Cart Is Empty... </h2>
        <button className="bg-[#16BA9A] px-8 my-4 font-bold text-xl text-white p-2 rounded-md">
          <Link to="/">Start Shopping!</Link>
        </button>
      </div>
    </div>
  )
}
