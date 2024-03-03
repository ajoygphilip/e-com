import ProductListing from '../components/ProductListing'

export default function Home() {
  const url = 'https://dummyjson.com/products'
  return <ProductListing url={url} />
}
