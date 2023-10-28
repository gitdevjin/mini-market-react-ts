import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Shop />} />
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
