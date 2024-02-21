export default function Header(){
    return (
    <header> 
      
     <div className="bg-[#EEEEEE] flex justify-end  pl-24 pr-24 p-4">
      <ul className='flex gap-4 self-end'>
        <li>Create an account </li>
        <li>Sign </li>
        <li> My Cart </li>
      </ul>
     </div>

     <div className='flex items-center justify-around gap-4 pl-24 pr-24  p-4 max-h-[75px]'>
        <img src="./assets/logo.svg" alt="logo" className='size-44 ' />


        <form action="/" method="get" className=''>
        <input
            className='bg-[#EEEEEE] p-1 h-[36px] round-t-[4px] round-l-[4px] w-[438px]'
            type="text"
            id="header-search"
            placeholder="Search products"
            name="s" 
        />
        <button type="submit" className='bg-[#16BA9A] w-[95px] h-[36px] p-2 text-white text-center '>Search</button>
    </form>

    <div className='flex items-center gap-4 h-[32px]'>
      <div className='flex h-24px items-center' >
        <img className=' max-h-[18px]' src="./assets/refresh.svg" alt="" />
        <div className='flex flex-col gap-[2px]'>
          <p className='font-semibold h-[5px]'>EASY RETURNS</p>
          <p className='h-[5px]'>No Hassle</p>
        </div>
        </div>
      <div className='flex h-24px items-center'>
        <img  className='  max-h-[18px]' src="./assets/stars.svg" alt="" />
        <div className='flex flex-col gap-[2px]'>
          <p className='font-semibold h-[5px]'>TRUSTED SUPPLIER</p>
          <p className='h-[5px]'>Best Customer Service</p>
        </div>
        </div>
      <div  className='flex h-24px items-center'>
        <img className='  max-h-[18px]' src="./assets/verified_user.svg" alt="" />
        <div className='flex flex-col gap-[2px]'>
          <p className=' h-[5px]'>SAFE SHOPPING</p>
          <p className='h-[5px]'>With Secure Payment</p>
        </div>
        </div>
    </div>

     </div>

     <nav className='bg-[#16BA9A] flex pl-24 pr-24 gap-[64px] h-[58px]  items-center  justify-between'>
      <div className='uppercase  mt-[2%] text-white text-[12px] h-[48px]'>Create Your Own</div>
      <div className='uppercase  mt-[2%]  text-white text-[12px] h-[48px]'>All Products</div>
      <div className='uppercase  mt-[2%] text-white text-[12px] h-[48px]'>Coffee Mugs</div>
      <div className='uppercase  mt-[2%] text-white text-[12px] h-[48px]'>Magic Mugs</div>
      <div className='uppercase  mt-[2%] text-white text-[12px] h-[48px]'>Combo Mugs</div>

     </nav>
    </header>)
}