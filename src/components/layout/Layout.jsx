import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './header/Header'
import CartContextProvider from '../../hooks/cartContext'

export default function Layout() {
  return (
    <CartContextProvider>
      <Header />
      <main className="px-8">
        <Outlet />
      </main>
      <Footer />
    </CartContextProvider>
  )
}
