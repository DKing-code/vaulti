import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router ,Routes,Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Tracking from './Pages/Tracking'
import {
  PhoneIcon 
} from "@heroicons/react/24/solid"
import About from './Pages/About'
import SecureVault from './Pages/SecureVault'
import ContactUs from './Pages/Contact'

function App() {
  return (
    <Router>
      <Navbar/>
      <a href='tel:08000456975'>
        <div className='md:w-20 md:h-20 w-10 h-10 bg-green-600 rounded-full fixed md:bottom-10 bottom-5 right-5 md:right-10 z-[1000] shadow-xl flex justify-center items-center cursor-pointer'>
            <PhoneIcon class="md:h-10 h-5 w-5 md:w-10 text-white" />
          </div>
      </a>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tracking' element={<Tracking/>} />
        <Route path='/secure-vault' element={<SecureVault/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
    </Router>
  )
}

export default App