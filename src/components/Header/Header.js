import GlobalCar from './GlobalCar';
import styles from './Header.module.css';
import Sitio from './Sitio';

function Header(){
    return (
        <div className={styles.header}>
            <Sitio></Sitio>
            <GlobalCar cantidadArticulos={0}></GlobalCar>
        </div>
    );
}

export default Header;