import styles from './Meals.module.css'
import Card from '../UI/Card';
import MealsItem from './MealsItem';

function Meals(props){
    return (
        <Card className={styles.mealContainer}>{ 
            props.meals.map((meal) => (
                <MealsItem
                    key={meal.id}
                    id={meal.id}
                    nombre={meal.nombre}
                    precio={meal.precio}
                    imagen={meal.imagen}
                />)
            )}
        </Card>
    );
}

export default Meals;