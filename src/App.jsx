import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
