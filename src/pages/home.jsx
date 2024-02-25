import { useState, useEffect, useRef, useCallback } from 'react'
import ProductCard from '../components/productCard'
import fetchProducts from '../scripts/fetchProducts'
import ProductLoadingCard from '../components/productLoadingCard'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

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

    fetchProducts(nextPage.current).then(productsData => {
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
  }

  useEffect(() => {
    updateProducts()
  }, [])

  return (
    <div className=" flex flex-wrap gap-[10px] pl-24 pr-24 p-8">
      {products.map((product, index, products) => {
        return (
          <ProductCard
            outerRef={index + 1 === products.length ? onInterception : null}
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.thumbnail}
          />
        )
      })}
      {loading && <ProductLoadingCard />}
    </div>
  )
}
