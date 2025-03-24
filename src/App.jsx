import { Routes, Route, Link } from 'react-router'

import Home from "./pages/Home/Home"
import Category from "./pages/Category/Category"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import TranferBank from './pages/TranferBank/TranferBank'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import Profile from './pages/Profile/Profile'
import Individual from "./pages/Profile/Item/Individual"
import CourseFavourite from "./pages/Profile/Item/CourseFavourite"
import CoursePayment from "./pages/Profile/Item/CoursePayment"
import ChangePassword from './pages/Profile/Item/ChagePassword'
import HistoryPayment from "./pages/Profile/Item/HistoryRecharge"

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
        <Route path='/ho-so/*' element={<Profile />} >
          <Route index path="ca-nhan" element={<Individual />} />
          <Route path='doi-mat-khau' element={<ChangePassword />} />
          <Route path='yeu-thich' element={<CourseFavourite />} />
          <Route path='da-mua' element={<CoursePayment />} />
          <Route path='lich-su-nap-tien' element={<HistoryPayment />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
