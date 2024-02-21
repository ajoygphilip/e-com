export default function Footer(){
    return (
        <footer  className="bg-[#EEEEEE] flex flex-col justify-between  pt-[20px]">

        <div className='flex justify-between gap-5 pl-24 pr-24 p-4'>
          <div>
            <p className='text-[14px] pb-3'>Company Information </p>
            <ul>
              <li className='text-[12px] pb-2'>About Us</li>
              <li className='text-[12px] pb-2'>Contact Us</li>
              <li className='text-[12px] pb-2'>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className='text-[14px] pb-3'>Customer Services</p>
            <ul>
              <li className='text-[12px] pb-2'>About Us</li>
              <li className='text-[12px] pb-2'>Contact Us</li>
              <li className='text-[12px] pb-2'>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className='text-[14px] pb-3'>Contact</p>
            <ul>
              <li className='text-[12px] pb-2'>91-72xxxxxxx</li>
              <li className='text-[12px] pb-2'>email@mail.com</li>
              <li className='text-[12px] pb-2'>Everywhere, All At Once</li>
            </ul>
            </div>
          <div className='w-[520px]  '>
            <p>Sign up for news and special offers</p>
            <p className='text-[12px]'>Get all the latest information on Events, Sales and Offers. Sign up for our newsletter today.</p>
         
            <form  className="" action="/" method="get" >
              <input
                  className='bg-white p-1 round-t-[4px] round-l-[4px]'
                  type="text"
                  id="header-search"
                  placeholder="Sign up for updates"
                  name="s" 
              />
              <button type="submit" className='bg-[#16BA9A] w-[95px] h-[36px] p-2 text-white text-center '>Search</button>
           </form>
         </div>
        </div>
  
        <div className='bg-[#3d3d3d] text-white p-[20px] pl-24 text-[12px]'>© Copyright 2024</div>
  
      </footer>
    )
}