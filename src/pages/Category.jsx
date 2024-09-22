import { useParams } from 'react-router-dom';
import ProductListing from '../components/content/productlisting/ProductListing';

export default function Category() {
  let { slug } = useParams();
  const url = `https://dummyjson.com/products/category/${slug}`;
  return <ProductListing url={url} />;
}
