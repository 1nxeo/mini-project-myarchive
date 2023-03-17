import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Mypage from "../pages/Mypage"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Write from "../pages/Write"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/mypage/:user_id" element={<Mypage/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/write" element={<Write/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router