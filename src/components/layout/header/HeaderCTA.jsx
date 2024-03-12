export function HeaderCTA({ image, text1, text2, alt }) {
  return (
    <div className="flex items-center justify-center">
      <img className=" max-h-5 mr-1" src={image} alt={alt} />
      <div className="flex flex-col">
        <p className=" text-[12px]">{text1}</p>
        <p className="text-[10px]">{text2}</p>
      </div>
    </div>
  )
}
