export function SearchBar() {
  return (
    <form action="/" method="get" className="flex w-[33%] ">
      <input
        className="bg-[#EEEEEE] p-1 h-9 w-full "
        type="text"
        id="header-search"
        placeholder="Search products"
        name="s"
      />
      <button
        type="submit"
        className="bg-[#16BA9A]  sm:w-20  text-white text-center"
      >
        Search
      </button>
    </form>
  )
}
