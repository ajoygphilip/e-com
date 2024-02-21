import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import Cart from './pages/cart'



function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='cart' element={<Cart/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  )
   
}

export default App
