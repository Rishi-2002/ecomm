import React, { useContext } from 'react'
import Cartcontext from '../context/cartcontext'
const Cart = () => {
	let ctx=useContext(Cartcontext)
	let sum=0
	ctx.arr.forEach((item)=>{
		sum=sum+item.price
	})
	console.log(sum)
  return (
	<div className='  bg-black '>
	<table className='  text-white w-[80%] m-auto text-center'>
		<thead>
	<tr>
		<th className='p-3'>Sno</th>
		<th>Product</th>
		<th>Title</th>
		<th>Quantity</th>
		<th>Price</th>
	</tr>
		</thead>
	<tbody>
	{ 
	ctx.arr.map((ele,i)=>{
		return <tr>
			<td className='p-3'>{i+1}</td>
			<td><img src={ele.thumbnail} className='h-32 w-32 m-auto' alt="" /></td>
			<td>{ele.title}</td>
		<td>
			<button>+</button>
			{ele.quantity}
			<button>-</button>
			
		</td>
		<td> ${ele.price}</td>
		<td>
				<button>delete</button>
			</td>
		</tr>
	 })
	 }
	</tbody>
	</table>
	<h1 className='text-center m-3 text-white'>Total= ${sum}</h1>
	</div>
  )
}

export default Cart
