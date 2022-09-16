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
import AfterLogin from './components/AfterLogin'

function App() {

return (
  <div className="App">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/user" element={<AfterLogin />} />
      <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/logout" element={<Logout />} />
    </Routes>

  </div>
);
}

export default App
