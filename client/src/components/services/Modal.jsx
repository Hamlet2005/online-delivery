import axios from "axios"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import css from './Services.module.css'

const Modal = ({ openModal, setOpenModal, total, addedItems }) => {
	const customStyles = {
		height: 'auto',
		bottom: 'auto',
		top: '30%',
		width: "300px"
	}
	const navigate = useNavigate()

	const [info, setInfo] = useState({
		email: "",
		phone: 0,
		name: "",
		count: 0,
		total: 0
	})

	const changeValue = (e) => {
		const { name, value } = e.target 
		setInfo(prevInfo => ({
			...prevInfo,
			[name]: value,
			items: addedItems.map(item => ({ name: item.name, count: item.count })),
			total: total
		}))
	}

	const handleClick = async (e) => {
		e.preventDefault()
		if (info.email.trim() && info.phone.length > 6) {
			try {
				await axios.post('http://localhost:4000/services', info)
				navigate("/")
			} catch (error) {
				console.error('Ошибка:', error)
			}
		}
	}

	return (
		<div>
			{
				openModal ?
					<Rodal customStyles={customStyles}  className={css.rodal} visible={true} onClose={() => { setOpenModal(false) }}>
						<div className={css.modalContent}>
							{
								addedItems.map(item => {
									return (
										<div className={css.modalInfo} key={item.id}>
											<span className={css.span}>{item.name} x {item.count}</span>
										</div>
									)
								})
							}
							<p className={css.totalP}>Celkový - {total} Kč</p>
						</div>

						<form method='post'>
							<div className={css.formDiv}>
								<label>Email</label>
								<input type='email' placeholder='Email' name='email' value={info.email} onChange={changeValue} />
							</div>
							<div className={css.formDiv}>
								<label>Phone</label>
								<input type='text' placeholder='Phone' name='phone' value={info.phone} onChange={changeValue} />
							</div>
							<button onClick={handleClick} className={css.button} type="submit"><span>Udělat objednávku</span></button>
						</form>
					</Rodal> : null
			}
		</div>
	)
}

export default Modal