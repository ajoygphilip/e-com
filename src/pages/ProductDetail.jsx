import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LoremIpsum } from 'lorem-ipsum'
import { ProductDetailImages } from '../components/ProductDetailImages'
import { ProductDetailInfo } from '../components/ProductDetailInfo'

export default function ProductDetail() {
  const lorem = new LoremIpsum()

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  let { id } = useParams()
  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(productData => setProduct(productData))
      .finally(setLoading(false))
  }, [id])

  if (loading) return <p>Loading Product</p>
  else {
    return (
      <div className=" p-4 flex gap-16 bg-white ">
        <ProductDetailImages
          images={
            product.images && product.images.length > 0 ? product.images : null
          }
        />

        <ProductDetailInfo lorem={lorem} product={product}></ProductDetailInfo>
      </div>
    )
  }
}
