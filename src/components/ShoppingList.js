import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {

	function onClickHandle(){
		alert("Vous avez ajouté un article au panier!");
	}

	return (
		<div className='shopping-list'>
			<div> Categories </div>
				
				{plantList.map (toto => {
				return (<div> 
				<PlantItem {...toto}/>
				<button onClick={onClickHandle}> Achete-moi! </button>
				</div>)
			})

		}
			
				
		</div>
	)
}

export default ShoppingList