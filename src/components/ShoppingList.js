import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {

	function onClickHandle(){
		alert("Vous avez ajouté un article au panier!");
	}

	return (
		<div className='shopping-list'>
		<PlantItem />	
		<PlantItem />
		<PlantItem />
		<PlantItem />
		<PlantItem />
		</div>
	)
}

export default ShoppingList