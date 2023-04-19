import React, { useEffect, useState } from 'react'
import api from './api.js'
import './container.css'
import NavBar from './components/Navbar/NavBar.jsx'
import Loader from './components/Loader/Loader.jsx'

function App() {
	const [items, setItems] = useState(null)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		api.fetchAll().then((data) => setItems(data))
	}, [])

	useEffect(() => {
		if (items) {
			setLoading(false)
		}
	}, [items])

	return (
		<div>
			<NavBar />
			{/*<Loader />*/}
			<div className="items">
				{isLoading ? (
					<div className="loader-wrapper">
						<Loader />
					</div>
				) : (
					items.map((item) => (
						<div key={item._id} className="container">
							<div className="name">
								<h1>{item.name}</h1>
							</div>
							<img
								style={{
									width: '200px',
									height: '180px',
									marginBottom: '20px'
								}}
								src={item.link}
								alt={item.link}
							/>
							<h1
								style={{ fontSize: '25px', marginBottom: '20px', color: 'red' }}
							>
								Price: {item.price}
							</h1>
							<button className="add_basket">Add to basket</button>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default App
