import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className="bg-[#EEEEEE] flex justify-end gap-4 pl-4 pr-4 sm:pl-8 sm:pr-8 p-2 sm:p-4">
      <ul className="flex gap-4 self-end text-sm">
        <li className="hover:bg-[#E7E7E7] transition ease-in-out delay-100 p">
          Create an account
        </li>
        <li className="hover:bg-[#E7E7E7] transition ease-in-out delay-100 p">
          Sign In
        </li>

        <Link to="#">
          <li className="hover:bg-[#E7E7E7] transition ease-in-out delay-100 p">
            My Cart
          </li>
        </Link>
      </ul>
    </div>
  )
}
