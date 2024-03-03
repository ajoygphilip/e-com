import { useState, useEffect, useRef, useCallback } from 'react'
import ProductCard from './ProductCard'
import getProducts from '../utils/getProducts'
import ProductLoadingCard from './ProductLoadingCard'
import { Link } from 'react-router-dom'

export default function ProductListing({ url }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  let nextPage = useRef(1)
  let observer = useRef()
  let hasMorePages = useRef(false)

  const onInterception = useCallback(node => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(
      entities => {
        if (entities[0].isIntersecting && hasMorePages.current) updateProducts()
      },
      { threshold: 1 }
    )
    if (node) observer.current.observe(node)
  }, [])

  function updateProducts() {
    setLoading(true)

    getProducts(url, nextPage.current)
      .then(productsData => {
        setProducts(prevProducts => {
          const uniqueProducts = productsData.products.filter(
            newProduct =>
              !prevProducts.find(
                existingProduct => existingProduct.id === newProduct.id
              )
          )
          return [...prevProducts, ...uniqueProducts]
        })
        setLoading(false)
        hasMorePages.current = productsData.products.length > 0
        nextPage.current = nextPage.current + 1
      })
      .catch(error => {
        setErrors(true)
        console.error('Error updating products:', error)
      })
  }

  useEffect(() => {
    updateProducts()
  }, [])

  useEffect(() => {
    setProducts([])
    nextPage.current = 1
    observer.current = null
    hasMorePages.current = false
    updateProducts()
  }, [url])

  if (errors) {
    return <div className="p-16 text-center ">Something Went wrong...</div>
  }

  if (products.length === 0) {
    return <div className="p-16 text-center ">No Products Found...</div>
  }

  if (products)
    <div className=" grid grid-cols-5 gap-4  pl-4 pr-4 sm:pl-8 sm:pr-8 p-2 sm:p-4 ">
      {products.map((product, index, products) => {
        return (
          <Link key={product.id} to={`/${product.id}`}>
            <ProductCard
              outerRef={index + 1 === products.length ? onInterception : null}
              title={product.title}
              price={product.price}
              image={product.thumbnail}
            />
          </Link>
        )
      })}
      {loading && <ProductLoadingCard />}
    </div>
}
