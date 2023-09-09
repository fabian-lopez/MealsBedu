import styles from "./MealAddForm.module.css";
import React, { useContext } from "react";
import Button from "../UI/Button";
import CartContext from "../Contexts/CartContext";

function MealAddForm({id, nombre, precio}) {

    const {onAddItems} = useContext(CartContext);

    const handleClickEvent = () => {
        onAddItems({
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1,
        });
    }

  return (
    <div className={styles.mealFormContainer}>
      <div className={styles.actionMeal}>
        <Button key={id} onClick={handleClickEvent} buttonStyle="aceptar" >+ Agregar</Button>
      </div>
    </div>
  );
}

export default MealAddForm;
