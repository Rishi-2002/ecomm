import React, { createContext, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import Cartcontext from '../src/context/cartcontext'

const Navbar = () => {
	let ctx=useContext(Cartcontext)
	console.log(ctx)

	let inputref=useRef();


	const handlesearch=()=>{
		let val=inputref.current.value
		console.log(val)
		ctx.setsearchval(val)
	}

  return (
	<div className='flex fixed top-0 left-0 right-0 justify-center items-center h-[60px] bg-black'>
	  <ul className='flex gap-8 '>
		<li className='text-amber-200'><Link to={'/'}>Home</Link> </li>
		<li className='text-amber-200'><Link to={'/cart'}>Cart<sup>{ctx.arr.length}</sup></Link></li>
		<li><input ref={inputref} type="text"className='px-4 py-2 border border-white text-white ' placeholder='enter a product' /><button onClick={handlesearch} className='px-3 py-4 bg-green-300 rounded-md'>Search</button></li>
	  </ul>
	</div>
  )
}

export default Navbar
