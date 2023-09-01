import Card from '../UI/Card';
import styles from './MealsItem.module.css'
function MealsItem(props){
    console.log(props.imagen)
    return (
        <Card className={styles.meal}>
            <label  className={styles.lblMeal}>Platillo:</label>
            <p id="nombre" className={styles.mealNombre}>{props.nombre}</p>
            <img src={props.imagen} className={styles.img}/>
            <label  className={styles.lblMeal}>Precio:</label>
            <p id="Precio" className={styles.mealPrecio}>${props.precio}</p>
        </Card>
    );
}


export default MealsItem;
