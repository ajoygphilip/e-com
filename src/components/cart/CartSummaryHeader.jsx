export default function CartSummaryHeader() {
  return (
    <>
      <h1 className="text-lg py-2  text-[#484848] font-bold">Your Cart </h1>
      <div className="bg-[#E2E3E7]  py-4 mb-2 flex justify-around">
        <div className=" min-w-[40%] pl-[8%]">Item</div>

        <div className=" min-w-[20%]">Prize</div>
        <div className="  min-w-[20%]">Quantity</div>
        <div className=" min-w-[20%]">Total</div>
      </div>
    </>
  )
}
