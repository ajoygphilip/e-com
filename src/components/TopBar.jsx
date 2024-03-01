import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../hooks/cartContext'

export default function TopBar() {
  const { cart } = useContext(CartContext)
  return (
    <div className="bg-[#EEEEEE] flex justify-end gap-4 pl-4 pr-4 sm:pl-8 sm:pr-8 p-2 sm:p-4">
      <ul className="flex gap-4 self-end text-sm">
        <li className="hover:bg-[#E7E7E7] transition ease-in-out delay-100 p">
          Create an account
        </li>
        <li className="hover:bg-[#E7E7E7] transition ease-in-out delay-100 p">
          Sign In
        </li>

        <Link
          to="cart"
          className="relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
          </svg>
          {cart && Object.keys(cart).length > 0 && (
            <div className="inline-flex items-end justify-end px-1 p-0.5 w-fit h-fit  text-xs font-bold text-white bg-red-400 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              {Object.values(cart).reduce((acc, curr) => acc + curr, 0)}
            </div>
          )}
        </Link>
      </ul>
    </div>
  )
}
