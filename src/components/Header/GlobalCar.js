import Card from '../UI/Card';
import styles from './GlobalCar.module.css';

function GlobalCar(props){
    return(
        
        <div className={styles.car}>
            <div className={styles.label}>
                <label>Carrito</label>
            </div>
            <div className={styles.cantidad}>
                <div className={styles.labelCantidad}>
                    <label>{props.cantidadArticulos || 0}</label>
                </div>
            </div>
        </div>
        
    )
}

export default GlobalCar;