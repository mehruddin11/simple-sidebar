import {links, social} from './data';
import {FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './conntext'

const Sidebar = () => {
	const {isSidebaropen, closeSidebar} =useGlobalContext();
	return (
		<article>
			<div className= {`${isSidebaropen ? 'sidebar show-sidebar':'sidebar'}`} >
			<div className='sidebar-header'>
			<h2>developer
			mehruddin </h2>
			<button className='close-btn' onClick ={closeSidebar} > <FaTimes/></button>
			</div>
			<ul className='links'>
			{
				links.map((link)=>{
					const {id,url,text,icon} = link;
					return <li key = {id}>
					<a href ={url}>{icon}{text} </a>
					</li>
				})
			}
			</ul>
			<ul className = 'social-icons'>
			{
				social.map((link)=>{
						const {id, url ,icon} = link;
						return <li key = {id}>
						<a href ={url}> {icon} </a>
					</li>
				})
			}
			</ul>
			</div>
		</article>

		)
}
export default Sidebar;