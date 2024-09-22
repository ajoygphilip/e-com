import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart';
import ProductDetail from './components/content/productdetail/ProductDetail.jsx';
import Category from './pages/Category.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="category/:slug" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
