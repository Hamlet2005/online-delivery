import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import { NavLink } from 'react-router-dom'
import { pages } from './Pages'
const Header = () => {
	const [isActive, setIsActive] = useState(true)

	const openBurger = () => {
		setIsActive(!isActive)
	}

	document.addEventListener("wheel", function(event){
		if(event.deltaY > 0) {
			setIsActive(true)
		}
	})
	console.log(isActive);

	return (
		<header>
			<nav>
				<div className='logo'>
					<img src='images/logo.png' alt='' />
					<h1>E.E.L.</h1>
				</div>
				<ul>
					{pages.map(page => {
						return (
							<li key={page.path}>
								<NavLink to={page.path}>{page.name}</NavLink>
							</li>
						)
					})}
				</ul>
				{
					isActive ? <GiHamburgerMenu className='burgerIcon' onClick={openBurger} /> :
						<IoMdClose className='burgerIconActive' onClick={openBurger} />
				}
			</nav>
			<ul className={isActive ? 'burgerMenu' : "burgerMenuActive"}>
				{pages.map(page => {
					return (
						<li key={page.path}>
							<NavLink to={page.path}>{page.name}</NavLink>
						</li>
					)
				})}
			</ul>
		</header>
	)
}

export default Header