import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const [cart, updateCart] = useState([])
	return (
		<div>
			<Banner logo={logo}/>
			<div className='layout-inner'>
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
