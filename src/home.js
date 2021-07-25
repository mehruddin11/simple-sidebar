import React from 'react';
import {FaBars}from 'react-icons/fa'
import {useGlobalContext} from './conntext'
const Home =() => {
	const {openModel,openSidebar} =useGlobalContext();
	 return (
		<main>
			 
			<button className='sidebar-toggle'onClick ={openSidebar} ><FaBars/> </button>
			 
			<button className='btn' onClick ={openModel} > content</button>
		</main>

		)
}
export default Home;