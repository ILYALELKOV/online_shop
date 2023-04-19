import React from 'react'
import style from './navbar.module.css'

const NavBar = () => {
	return (
		<div className={style.nav_container}>
			<div className={style.logo_block}>
				<img
					src="/src/components/Navbar/img/atlas.png"
					className={style.logo}
					alt="atlas"
				/>
				<div>
					<form action="#">
						<input
							className={style.input_search}
							placeholder="Search..."
							type="text"
						/>
						<button className={style.btn_search}></button>
					</form>
				</div>
			</div>
			<div className={style.info_container}>
				<div className={style.description_logo}>
					<img
						src="/src/components/Navbar/img/user.png"
						className={style.nav_icons}
						alt="basket"
					/>
					<span>User</span>
				</div>
				<div className={style.description_logo}>
					<img
						src="/src/components/Navbar/img/heart.png"
						className={style.nav_icons}
						alt="basket"
					/>
					<span>Favorites</span>
				</div>
				<div className={style.description_logo}>
					<img
						src="/src/components/Navbar/img/basket.png"
						className={style.nav_icons}
						alt="basket"
					/>
					<span>Basket</span>
				</div>
			</div>
		</div>
	)
}

export default NavBar
