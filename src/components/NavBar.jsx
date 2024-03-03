import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  let categories = useRef(
    JSON.parse(localStorage.getItem('gapbargainCategories'))
  )
  const [error, setError] = useState(false)

  function initializeCategories() {
    if (!categories.current) {
      fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(categoryData => {
          categories.current = categoryData.slice(0, 4)
          localStorage.setItem(
            'gapbargainCategories',
            JSON.stringify(categoryData.slice(0, 4))
          )
        })
      // .catch(setError(true))
    }
  }

  useEffect(() => {
    initializeCategories()
  }, [])

  return (
    <nav className="bg-[#16BA9A] flex pl-4 pr-4 sm:pl-8 sm:pr-8 gap-8 sm:gap-16 h-11 items-center justify-around">
      {error && <div>Error Loading Categories...</div>}

      {categories.current && <NavBarItem key="all" text="All Products" />}

      {categories.current &&
        categories.current.map((cat, i) => <NavBarItem key={i} text={cat} />)}
    </nav>
  )
}

function NavBarItem({ text }) {
  return (
    <NavLink to={text === 'All Products' ? '/' : `/products/${text}`}>
      <div className="uppercase p-1.5 cursor-pointer flex items-center justify-center hover:bg-[#15B394] hover:underline transition ease-in-out delay-100 text-white font-thin text-sm">
        {text}
      </div>
    </NavLink>
  )
}
