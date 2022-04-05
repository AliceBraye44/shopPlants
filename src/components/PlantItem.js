import '../styles/PlantItem.css'



function PlantItem() {

	return (
		<li className='plant-item'>
			<span className='plant-item-price'>15€</span>
				<img className='plant-item-cover' src="https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="fausse image"></img>
			
			<h1>Belle Plante</h1>
		</li>
	)
}

export default PlantItem