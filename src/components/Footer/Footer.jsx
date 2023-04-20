import React from 'react'
import style from './footer.module.css'

const Footer = () => {
	return (
		<div className={style.footer_container}>
			<img
				className={style.logo}
				src="/src/components/Navbar/img/atlas.png"
				alt="logo_company"
			/>
			<div className={style.address_container}>
				<img
					src="/src/components/Footer/img/address.png"
					alt="address_company"
				/>
				<address className={style.address}>
					540 AUDUBON AVE <br /> NEW YORK NY 10040-3304 <br /> USA
				</address>
			</div>
			<div className={style.green_planet_container}>
				<img src="/src/components/Footer/img/planet.png" alt="planet" />
				<span>Save nature and help people with us</span>
			</div>
			<div className={style.complaint_container}>
				<img src="/src/components/Footer/img/complaint.png" alt="" />
				<span>Leave a complaint</span>
			</div>
			<div className={style.phone_container}>
				<img
					className={style.phone_icon}
					src="/src/components/Footer/img/phone.png"
					alt="pnone_number"
				/>
				<a className={style.phone} href="tel:+380441234567">
					+ 38 (044) 123-45-67
				</a>
			</div>
		</div>
	)
}

export default Footer
