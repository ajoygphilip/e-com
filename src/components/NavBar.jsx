export default function NavBar() {
  return (
    <nav className="bg-[#16BA9A] flex pl-4 pr-4 sm:pl-8 sm:pr-8 gap-8 sm:gap-16 h-11 items-center justify-around">
      <NavBarItem text="Create Your own" />
      <NavBarItem text=" All Products" />
      <NavBarItem text="Coffee Mugs" />
      <NavBarItem text="Magic Mugs" />
      <NavBarItem text="Combo Mugs" />
    </nav>
  )
}

function NavBarItem({ text }) {
  return (
    <div className="uppercase p-1.5 flex items-center justify-center hover:bg-[#15B394] hover:underline transition ease-in-out delay-100 text-white font-thin text-sm">
      {text}
    </div>
  )
}
