import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from '../components/Navbar'
import Cart from './pages/Cart';
const App = () => {
  return (
    <div>
      <BrowserRouter>
     <div className='h-[60px]'>
     <Navbar/>
     </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
