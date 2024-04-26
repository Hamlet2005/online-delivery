import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { pages } from './Pages'

const Routers = () => {
  return (
	<>
		<Routes>
			{
				pages.map((page) => {
					return <Route key={page.name} path={page.path} element={page.element}/>
				})
			}
		</Routes>
	</>
  )
}

export default Routers