import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart'
import ProductDetail from './components/content/productdetail/ProductDetail.jsx'
import Category from './pages/Category.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="products/:category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
