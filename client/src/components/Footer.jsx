import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'

const Footer = () => {
	return (
		<footer>
			<div className='globalFooter'>
				<div className='contactInfo'>
					<h2>Kontaktujte nás</h2>
					<div className='contact'>
						<div className='info'>
							<FaPhone />
							<p> 733 221 754</p>
						</div>
						<div className='info'>
							<IoMailSharp />
							<p>info@example.com</p>
						</div>
					</div>
				</div>
				<div className='contactInfo'>
					<h2>Otevírací</h2>
					<div className='contact'>
						<div className='contact'>
							<div
								className='info'
								style={{ flexDirection: 'column', fontSize: '20px' }}
							>
								<p>Pondělí - Sobota</p>
								<p>08AM - 08PM</p>
							</div>
							<div
								className='info'
								style={{ flexDirection: 'column', fontSize: '20px' }}
							>
								<p>Neděle</p>
								<p>10AM - 08PM</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='copyright'>
				<span style={{cursor: "default"}}>© &nbsp;</span><p>All Right Reserved By E.E.L Inc</p>
			</div>
		</footer>
	)
}

export default Footer
