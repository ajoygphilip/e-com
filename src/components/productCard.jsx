export default function ProductCard({ title, price, image, outerRef }) {
  return (
    <div
      ref={outerRef}
      className=" w-[230px] p-4 h-[270px] flex flex-col gap-[8px] justify-center items-center bg-white border hover:shadow-xl transition ease-in-out delay-100"
    >
      <img className="max-w-[200px] max-h-[200px]" src={image} alt="" />
      <p className="self-start text-[12px]">
        As low as{' '}
        <span className="text-[#d33539] text-[18px] font-semibold">
          ${price}
        </span>
      </p>
      <p className="self-start text-[12px]">{title}</p>
    </div>
  )
}
