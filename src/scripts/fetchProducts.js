export default async function fetchProducts(nextPage) {
  let skip = nextPage > 1 ? `skip=${(nextPage - 1) * 10}` : ''
  return fetch(`https://dummyjson.com/products?limit=10&${skip}`)
    .then(response => response.json())
    .then(productsData => productsData)
}
