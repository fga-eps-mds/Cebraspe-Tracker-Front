import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import Logout from './components/Logout'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useState } from 'react'
import { useEffect } from 'react'
import AfterLogin from './components/AfterLogin'

function App() {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);


  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type" : "application/json"
        },
        credentials: "include"
      });
      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

  } catch (error) {
    console.log(error)
  }
}


useEffect(()=>{
  isLoggedIn();
}, []);


return (
  <div className="App">
    <Navbar auth={auth1}/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/user" element={<AfterLogin />} />
      <Route exact path="/about" element={<About />} />
      <Route element={<ProtectedRoutes userst={auth1} />}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoutes userst={auth} />}>
        <Route exact path="/logout" element={<Logout />} />
      </Route>

    </Routes>

  </div>
);
}

export default App
