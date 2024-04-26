import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BuyMenu from './BuyMenu'
import css from './Services.module.css'
const Services = () => {
	const [dishes, setDishes] = useState([])
	const [addedItems, setAddedItems] = useState([])

	useEffect(() => {
		axios.get('http://localhost:4000/api/dishes').then(response => {
			setDishes(response.data)
		})
	}, [])

	const handleDeleteItem = (id) => {
		const updatedItems = addedItems.filter((item) => item.id !== id);
		setAddedItems(updatedItems);
		setDishes(prevDishes => {
			return prevDishes.map(dish => {
				if (dish.id === id) {
					dish.added = 0;
				}
				return dish;
			});
		});
	};

	const addItem = (id) => {
		const itemExists = addedItems.some((item) => item.id === id)
		if (!itemExists) {
			const foundItem = dishes.find((dish) => dish.id === id)
			if (foundItem) {
				foundItem.added = 1
				setAddedItems([...addedItems, foundItem])
			}
		}
	}

	return (
		<div className={css.services}>
			<h2 className={css.h2}>Všechny Menu</h2>
			{dishes ? (
				<div className={css.block}>
					{dishes.map(dish => {
						return (
							<div className={css.box} key={dish.id}>
								<img src={`./images/${dish.image}`} alt='' />
								<div className={css.info}>
									<p className={css.p}>
										{dish.name} - {dish.price} Kč
									</p>
									<button
										className={dish.added === 1 ? css.inactiveButton : css.activeButton}
										onClick={() => addItem(dish.id)}
									>
										{dish.added === 1 ? 'Přidal' : 'PŘIDAT PRODUKT'}
									</button>
								</div>
							</div>
						)
					})}
				</div>
			) : null}
			<BuyMenu
				addedItems={addedItems}
				setAddedItems={setAddedItems}
				dishes={dishes}
				onDeleteItem={handleDeleteItem}
			/>
		</div>
	)
}

export default Services
