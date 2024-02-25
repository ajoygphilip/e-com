export default function Footer() {
  return (
    <footer className="bg-gray-200 flex flex-col justify-between pt-5 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 pl-4 md:pl-8 pr-4 md:pr-8 pb-4 md:pb-0">
        <div>
          <p className="text-sm md:text-base pb-3">Company Information</p>
          <ul>
            <li className="text-xs md:text-sm pb-2">About Us</li>
            <li className="text-xs md:text-sm pb-2">Contact Us</li>
            <li className="text-xs md:text-sm pb-2">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-sm md:text-base pb-3">Customer Services</p>
          <ul>
            <li className="text-xs md:text-sm pb-2">About Us</li>
            <li className="text-xs md:text-sm pb-2">Contact Us</li>
            <li className="text-xs md:text-sm pb-2">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-sm md:text-base pb-3">Contact</p>
          <ul>
            <li className="text-xs md:text-sm pb-2">91-72xxxxxxx</li>
            <li className="text-xs md:text-sm pb-2">email@mail.com</li>
            <li className="text-xs md:text-sm pb-2">Everywhere, All At Once</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <p>Sign up for news and special offers</p>
          <p className="text-xs md:text-sm">
            Get all the latest information on Events, Sales and Offers. Sign up
            for our newsletter today.
          </p>
          <form className="flex pt-2" action="/" method="get">
            <input
              className="bg-white p-1 md:p-2 "
              type="text"
              id="header-search"
              placeholder="Sign up for updates"
              name="s"
            />
            <button
              type="submit"
              className="bg-[#16BA9A] w-24 md:w-auto h-8 md:h-auto p-2 text-white text-center "
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#3d3d3d] text-center text-white p-5 pl-24 text-xs">
        © Copyright {new Date().getFullYear()}
      </div>
    </footer>
  )
}
