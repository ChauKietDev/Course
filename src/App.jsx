import { Routes, Route, Link } from 'react-router'

import Home from "./pages/Home/Home"
import Category from "./pages/Category/Category"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import TranferBank from './pages/TranferBank/TranferBank'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/productDetail' element={<ProductDetail />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/chuyen-khoan' element={<TranferBank />} />
        <Route path='/quen-mat-khau' element={<ForgetPassword />} />
        <Route path='/gio-hang' element={<ShoppingCart />} />
      </Routes>
    </>
  )
}

export default App
