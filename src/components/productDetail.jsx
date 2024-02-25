import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  let [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  let { id } = useParams()
  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(productData => setProduct(productData))
      .finally(setLoading(false))
  }, [id, product])

  if (loading) return <p>Loading Product</p>
  else {
    return (
      <div className="w-[230px] p-4 h-[270px] flex flex-col gap-[8px] justify-center items-center bg-white ">
        <img
          className="max-w-[200px] max-h-[200px]"
          src={
            product.images && product.images.length > 0 ? product.images[0] : ''
          }
          alt=""
        />
        <p className="self-start text-[12px]">
          As low as{' '}
          <span className="text-[#d33539] text-[18px] font-semibold">
            ${product.price}
          </span>
        </p>
        <p className="self-start text-[12px]">{product.title}</p>
        Detail Page
      </div>
    )
  }
}
