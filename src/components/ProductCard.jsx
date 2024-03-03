export default function ProductCard({ title, price, image, outerRef }) {
  return (
    <div
      ref={outerRef}
      className="productCard w-60 p-4 h-68 flex flex-col gap-[8px] justify-center items-center bg-white border hover:shadow-xl transition ease-in-out delay-100"
    >
      <div className="p-2">
        <img className="w-[200px] h-[200px]" src={image} alt="" />
      </div>
      <p className="self-start text-[12px]">
        As low as{' '}
        <span className="text-[#d33539] text-[18px] font-semibold">
          ${price}
        </span>
      </p>
      <p className="self-start text-[14px]">{title}</p>
    </div>
  )
}
