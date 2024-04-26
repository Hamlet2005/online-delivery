import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import css from './Home.module.css'

const Menu = () => {
	const [dishes, setDishes] = useState([])

	useEffect(() => {
		axios.get('http://localhost:4000/api/dishes').then(response => {
			setDishes(response.data)
		})
	}, [])

	return (
		<article className={css.menu} id="menu">
			<h2 className={css.sectionTitle}>Jídelní menu</h2>
			{dishes ? (
				<div className={css.menuBlock}>
					{dishes.map(dish => {
						return (
							<div key={dish.id} className={css.menuBox}>
								<img src={`./images/${dish.image}`} alt='' />
								<div className={css.foodInfo}>
									<h3 className={css.h4}>{dish.name}</h3>
									<h5>{dish.price}Kč</h5>
								</div>
							</div>
						)
					})}
				</div>
			) : null}
			<Link className={css.orderBtn} to={"/services"}>Udělat objednávku</Link>
		</article>
	)
}

export default Menu
