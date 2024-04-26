import Home from './home/Home'
import Services from './services/Services'

export const pages = [
	{
		name: "Home",
		path:'/',
		element: <Home/>
	},
	{
		name: "Services",
		path:'/services',
		element: <Services/>
	},
]