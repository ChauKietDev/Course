import { Routes, Route, Link } from 'react-router'

import Home from "./pages/Home/Home"
import Category from "./pages/Category/Category"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import SignUp from './pages/SignUp/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/productDetail' element={<ProductDetail />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </>

  )

}

export default App
