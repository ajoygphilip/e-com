export default async function getProducts(url, nextPage) {
  let skip = nextPage > 1 ? `skip=${(nextPage - 1) * 10}` : ''
  return fetch(`${url}?limit=10&${skip}`)
    .then(response => response.json())
    .then(productsData => productsData)
}
