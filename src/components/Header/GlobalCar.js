import { useContext } from 'react';
import Card from '../UI/Card';
import styles from './GlobalCar.module.css';
import CartContext from '../Contexts/CartContext';

function GlobalCar(props){

    const {totalMeals} = useContext(CartContext);

    return(
        
        <div className={styles.car}>
            <div className={styles.label}>
                <label>Carrito</label>
            </div>
            <div className={styles.cantidad}>
                <div className={styles.labelCantidad}>
                    <label>{totalMeals || 0}</label>
                </div>
            </div>
        </div>
        
    )
}

export default GlobalCar;