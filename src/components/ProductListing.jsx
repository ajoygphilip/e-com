import { useState, useEffect, useRef, useCallback } from 'react'
import ProductCard from './ProductCard'
import getProducts from '../utils/getProducts'
import ProductLoadingCard from './ProductLoadingCard'
import { Link } from 'react-router-dom'

export default function ProductListing({ url }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

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
        hasMorePages.current = productsData.products.length > 0
        nextPage.current = nextPage.current + 1
        setLoading(false)
      })
      .catch(err => setErrors(true))
  }

  useEffect(() => {
    updateProducts()
  }, [])

  if (errors) {
    return (
      <div className="flex flex-wrap justify-center items-center h-48 md:h-64 lg:h-80 xl:h-96 gap-4 md:gap-6 lg:gap-8 xl:gap-10 pl-4 md:pl-8 pr-4 md:pr-8 p-2 md:p-4">
        Something Went wrong...
      </div>
    )
  }

  return (
    <div className=" flex flex-wrap justify-around items-center gap-4  pl-4 pr-4 sm:pl-8 sm:pr-8 p-2 sm:p-4 ">
      {products.map((product, index, products) => {
        return (
          <Link key={product.id} to={`${product.id}`}>
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
  )
}
