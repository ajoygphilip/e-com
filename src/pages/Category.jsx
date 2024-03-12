import { useParams } from 'react-router-dom'
import ProductListing from '../components/content/productlisting/ProductListing'

export default function Category() {
  let { category } = useParams()
  const url = `https://dummyjson.com/products/category/${category}`
  return <ProductListing url={url} />
}
