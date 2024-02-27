import { useState, useEffect } from 'react'

function ImageThumbnail({ image, clickHandler }) {
  return (
    <div
      onClick={() => {
        clickHandler(image)
      }}
      className=" h-14 w-14	shadow-md"
    >
      <img className="h-12 w-12" src={image} alt="" />
    </div>
  )
}
export function ProductDetailImages({ images }) {
  const [previewImg, setPreviewImg] = useState(null)

  useEffect(() => {
    if (images && images.length > 0) {
      setPreviewImg(images[0])
    }
  }, [images])

  if (!images) {
    return <p>Loading</p>
  }

  return (
    <div className="flex  gap-2 px-4 py-8 border border-1">
      <div className="flex flex-col gap-2  cursor-pointer ">
        {images.map((image, index) => (
          <ImageThumbnail
            clickHandler={setPreviewImg}
            key={index}
            image={image}
          ></ImageThumbnail>
        ))}
      </div>
      <div className="px-2 py-4">
        <img className="w-[337px] h-[337px]" src={previewImg} />
      </div>
    </div>
  )
}
