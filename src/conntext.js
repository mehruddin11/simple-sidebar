import React,{useContext, useState} from 'react';

const Appcontext = React.createContext();

const AppProvider = ({children}) => {
	const [isSidebaropen ,SetisSidebaropen] =useState(false)
	const [isModeOpen, SetisModelOpen] =useState(false)
	const openModel = () => {
		return SetisModelOpen(true);
	}
	const closeModel = () => {
		return SetisModelOpen(false);
	}
	const openSidebar =() => {
		return SetisSidebaropen(true);
	}
	const closeSidebar = () =>{
		return SetisSidebaropen(false)
	}
	return <Appcontext.Provider value = {{
		isSidebaropen,
		isModeOpen,
		openModel, 
		closeModel,
		openSidebar,
		closeSidebar
	}}>
		{children}
	</Appcontext.Provider>
}
export const useGlobalContext = () => {
	return useContext(Appcontext)
}
export {Appcontext, AppProvider}