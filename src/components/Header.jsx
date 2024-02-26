import { Link } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import { SearchBar } from './SearchBar.jsx'
import { HeaderCTA } from './HeaderCTA.jsx'
import TopBar from './TopBar.jsx'

export default function Header() {
  return (
    <header>
      <TopBar />

      <div className="flex items-center justify-around gap-4 pl-4 pr-4 sm:pl-8 sm:pr-8 p-2 sm:p-4 max-h-[75px]">
        <Link to="/">
          <img src="./assets/logo.png" alt="logo" className="" />
        </Link>

        <SearchBar />

        <div className="flex items-center gap-4 h-8">
          <HeaderCTA
            image="./assets/refresh.svg"
            text1="EASY RETURNS"
            text2="No Hassle"
            alt=""
          />

          <HeaderCTA
            image="./assets/stars.svg"
            text1="TRUSTED SUPPLIER"
            text2="Best Customer Service"
            alt=""
          />

          <HeaderCTA
            image="../assets/verified_user.svg"
            text1="SAFE SHOPPING"
            text2="With Secure Payment"
            alt=""
          />
        </div>
      </div>
      <NavBar />
    </header>
  )
}
