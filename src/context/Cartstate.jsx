import React, { useState } from 'react'
import Cartcontext from './cartcontext'

const Cartstate = (props) => {
	const [arr, setarr] = useState([]);
	const [searchval, setsearchval] = useState("");
	function additems(obj){
	let	copyarr=[...arr]
		copyarr.push(obj);
		setarr(copyarr)
	}
  return (
	<Cartcontext.Provider value={{arr,additems,searchval,setsearchval}}>
		
	  {props.children}
	</Cartcontext.Provider>
  )
}

export default Cartstate
