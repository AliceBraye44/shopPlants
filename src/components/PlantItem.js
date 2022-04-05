import '../styles/PlantItem.css'



function PlantItem() {

	return (
		< div className='plant-item'>
			<div className='plant-item-cover'>
				<img src="https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="fausse image"></img>
			</div>
			<div className='plant-item-price'>15€</div>
			<h1>Belle Plante</h1>
		</div>
	)
}

export default PlantItem