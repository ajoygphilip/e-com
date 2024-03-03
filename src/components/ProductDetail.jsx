import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LoremIpsum } from 'lorem-ipsum'
import { ProductDetailImages } from './ProductDetailImages'
import { ProductDetailInfo } from './ProductDetailInfo'

export default function ProductDetail() {
  const lorem = new LoremIpsum()

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)

  let { id } = useParams()
  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Product not found')
        }
        return response.json()
      })
      .then(productData => {
        setProduct(productData)
        setLoading(false)
      })
      .catch(error => {
        setErrors(true)
        console.error('Error fetching product:', error)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="p-16 text-center">Loading Product</div>

  if (errors) return <div className="p-16 text-center">Product not found</div>

  if (!errors && product) {
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
