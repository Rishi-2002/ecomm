import React, { useContext, useEffect, useState } from 'react'
import Cartcontext from '../context/cartcontext';
import Cart from './Cart';

const Home = () => {
	let ctx=useContext(Cartcontext);
	console.log(ctx)
	let searchValuee= ctx.searchval;
	console.log(searchValuee)

	const [alldata, setalldata] = useState([]);

	let getalldata= async()=>{
		let res=await fetch('https://dummyjson.com/products?limit=0');
		let data=await res.json();
		console.log(data.products)

		setalldata(data.products)
	}
	// pagination--------->
	const [currentpage, setcurrentpage] = useState(1);
	let itemperpage=8;
	let lastindex=itemperpage*currentpage;
	let firstindex=lastindex-itemperpage;


		let filteredarr=alldata.filter((ele)=>ele.title.toLowerCase().includes(searchValuee.toLowerCase()) || ele.category.toLowerCase().includes(searchValuee.toLowerCase()))
	console.log(filteredarr)


	let slicedarr=filteredarr.slice(firstindex,lastindex);
	console.log(slicedarr)
	let total=Math.ceil(filteredarr.length/itemperpage)

	let btnarr=[]
	for(let i=1;i<=total;i++){
		btnarr.push(i)
	}



	const handlenext=()=>{
		if(currentpage<total){
			console.log(total)
			setcurrentpage(currentpage+1)
		}
	}
	const handleprev=()=>{
		if (currentpage>1){
			setcurrentpage(currentpage-1)
		}
	}



	useEffect(()=>{
		getalldata();
	},[])
  return (
	<div>
		<div className=' bg-black grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2' >
	{
		slicedarr.map((ele,i)=>{
			return <div className='flex flex-col items-center border-[0.5px] p-3 rounded border-blue-50'>
				<img src={ele.thumbnail} alt="" />
				<p>{ele.title}</p>
				<button onClick={()=>ctx.additems(ele)} className='w-[70%] bg-green-600 px-4 py-2 rounded'>Add to Cart</button>
			</div>
		})
	}
	</div>



	<div className='flex gap-1 justify-center my-6'>
		{/* {
			btnarr.map((num,i)=>{
				return <button>
					{num}
				</button>
			})
		} */}


<button onClick={handleprev} className='bg-red-300 rounded-2xl w-[75px] px-3 py-2'>Previous</button>
	{
			Array(total).fill('0 ').map((num,i)=>{
				return <button onClick={()=>setcurrentpage(i+1)} className='bg-red-300 rounded-2xl w-[25px] px-1 py-2'>
					{i+1}
				</button>
			})

	}
	<button onClick={handlenext} className='bg-red-300 rounded-2xl w-[75px] px-3 py-2'>Next</button>
	</div>
	</div>
  )
}

export default Home
