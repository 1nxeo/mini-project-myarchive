import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Mypage from '../pages/Mypage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Post from '../pages/Post'
import Detail from '../pages/Detail'
import AdminLogin from '../pages/AdminLogin'
import Admin from '../pages/Admin'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage/:accountId" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
