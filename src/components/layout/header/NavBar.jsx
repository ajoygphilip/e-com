import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  let categories = useRef(JSON.parse(localStorage.getItem('gapbargainCategories')));
  const [error, setError] = useState(false);

  function initializeCategories() {
    if (!categories.current) {
      fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(categoryData => {
          categories.current = categoryData;
          localStorage.setItem('gapbargainCategories', JSON.stringify(categoryData));
        });
      // .catch(setError(true))
    }
  }

  useEffect(() => {
    initializeCategories();
  }, []);

  return (
    <nav className="bg-[#16BA9A] flex pl-4 pr-4 sm:pl-8 sm:pr-8 gap-8 sm:gap-16 h-11 items-center justify-around">
      {error && <div>Error Loading Categories...</div>}

      {categories.current && <NavDropDown categories={categories.current.slice(4)} />}

      {categories.current && categories.current.slice(0, 4).map((cat, i) => <NavBarItem key={i} text={cat} />)}
    </nav>
  );
}

function NavBarItem({ text: category }) {
  return (
    <NavLink to={`/category/${category.slug}`}>
      <div className="uppercase font-[16px] p-1.5 cursor-pointer flex items-center justify-center hover:bg-[#15B394] hover:underline transition ease-in-out delay-100 text-white ">
        {category.name}
      </div>
    </NavLink>
  );
}

function NavDropDown({ categories }) {
  return (
    <div className="dropdown   bg-[#15B394]">
      <button className="dropbtn px-5 font-[16px] py-4  text-white uppercase">All Products</button>
      <div className="dropdown-content flex flex-col bg-white">
        {categories.map((category, index) => (
          <div key={index} className=".navlink  font-[12px] p-1.5 pr-2 hover:bg-[#EEEEEE] block">
            <NavLink to={`/products/category/${category.slug}`} className="uppercase">
              {category.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
