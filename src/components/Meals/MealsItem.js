import Card from '../UI/Card';
import MealAddForm from './MealAddForm';
import styles from './MealsItem.module.css'
function MealsItem(props){
    
    return (
        <Card className={styles.meal}>
            <label  className={styles.lblMeal}>Platillo:</label>
            <p id="nombre" 
                className={styles.mealNombre}>
                    {props.nombre}
            </p>
            <img src={props.imagen} className={styles.img}/>

            <div className={styles.actions}>
                <div>
                    <label className={styles.lblMeal}>
                        Precio:
                    </label>
                    <p  id="Precio" 
                        className={styles.mealPrecio}>
                        ${props.precio}
                    </p>
                </div>
                <div>
                    <MealAddForm 
                        id={props.id} 
                        nombre={props.nombre} 
                        precio={props.precio}>

                    </MealAddForm>
                </div>
            </div>
        </Card>
    );
}


export default MealsItem;
