import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CartContextProvider from '../hooks/cartContext'

export default function Layout() {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartContextProvider>
  )
}
