import '../styles/PlantItem.css'



function PlantItem({name, price, cover}) {

	return (
		<li className='plant-item'>
			<span className='plant-item-price'>{price}$</span>
			<img className='plant-item-cover' src={cover}/>
			<h2>{name}</h2>
		</li>
	)
}

export default PlantItem