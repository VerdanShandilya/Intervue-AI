import { useState } from 'react'

import { Route,Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { Homepage } from './pages/Homepage'
import OauthSuccess from "./component/OauthSuccess";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path = "/login" element={<Login/>}></Route>
      <Route path="/oauth-success" element={<OauthSuccess />} />
    </Routes>
    </>
  )
}

export default App
