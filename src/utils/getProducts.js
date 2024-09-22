export default async function getProducts(url, nextPage) {
  let skip = nextPage > 1 ? `skip=${(nextPage - 1) * 10}` : '';
  const limit = 'limit=10';

  const separator = url.includes('?') ? '&' : '?';
  const fullUrl = `${url}${separator}${limit}${skip ? '&' + skip : ''}`;

  return fetch(fullUrl)
    .then(response => response.json())
    .then(productsData => productsData);
}
