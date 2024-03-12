import ProductListing from '../components/content/productlisting/ProductListing'

export default function Home() {
  const url = 'https://dummyjson.com/products'
  return <ProductListing url={url} />
}
