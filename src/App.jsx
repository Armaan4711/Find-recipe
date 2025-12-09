import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Favorites from './components/favourite/Favorites'
import Details from './components/details/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <Home />
            }
          />
          <Route
            path='/favorites'
            element={
              <Favorites />
            }
          />
          <Route
            path='/details/:id'
            element={
              <Details/>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
