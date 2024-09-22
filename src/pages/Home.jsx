import { useSearchParams } from 'react-router-dom';
import ProductListing from '../components/content/productlisting/ProductListing';

export default function Home() {
  let url = 'https://dummyjson.com/products';

  let [searchParams] = useSearchParams();
  const query = searchParams.get('s') || '';
  const queryString = query === '' ? '' : `/search?q=${query}`;

  let apiUrl = url.concat(queryString);
  return <ProductListing url={apiUrl} />;
}
