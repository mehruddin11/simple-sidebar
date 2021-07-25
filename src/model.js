import {FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './conntext'
const Model = () => {
	const {isModeOpen,closeModel} = useGlobalContext()
	return (
		<div className= {`${isModeOpen ? 'modal-overlay show-modal': 'modal-overlay' }`}>
			<div className='modal-container'>
			<h3>  content </h3>
			<button className='close-modal-btn' onClick = {closeModel} ><FaTimes/></button>
			</div>
		</div>
		)
} 
export default Model