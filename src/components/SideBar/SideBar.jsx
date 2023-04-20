import React from 'react'
import style from './sidebur.module.css'

const SideBar = () => {
	return (
		<div className={style.side_container}>
			<ul className={style.side_bar_list}>
				<li className={style.side_bar_list_item_categories}>Categories</li>
				<li className={style.side_bar_list_item}>Video cards</li>
				<li className={style.side_bar_list_item}>Processors</li>
				<li className={style.side_bar_list_item}>RAM</li>
				<li className={style.side_bar_list_item}>Motherboards</li>
				<li className={style.side_bar_list_item}>Power supplies</li>
				<li className={style.side_bar_list_item}>Corps</li>
			</ul>
			<button className={style.sidebar_btn}>All goods</button>
		</div>
	)
}

export default SideBar
