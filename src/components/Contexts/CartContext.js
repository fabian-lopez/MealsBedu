import { createContext, useEffect, useState } from "react";


const CartContext = createContext({
    carItems: null, // list of added items
    totalPagar: 0, 
    totalMeals: 0,
    onAddItems: () => {}, 
    onRemoveItems: () => {},
    onClearItems: () => {}
});


export function CartContextProvider({children}){
    const [carItems, setCarItems] = useState(null); // lista de meals seleccionados [{id, nombre, precio, cantidad}]
    const [totalPagar, setTotalPagar] = useState(0);
    const [totalMeals, setTotalMeals] = useState(0)

    useEffect(() => {

        const calculaTotal = () => {

            if(carItems){
                setTotalPagar(carItems.reduce((prev, curr) => {
                    return prev + (curr.precio * curr.cantidad);
                }, 0));

                setTotalMeals(carItems.reduce((prev, curr)=>{
                    return prev + curr.cantidad;
                }, 0));
            } else {console.log("car vacio useEffect")}

        }

        calculaTotal();
    }, [carItems]) // calcula total cada que los items cambien.

    const findMeal = (id) => {
        return carItems.filter(meal => meal.id === id);
    }


    const isMealAddedAndHasItem = (meal) => {
        return meal?.length > 0 && meal.cantidad > 0
    }

    const onAddItemsHandler = (nuevoItem) => {

        if(carItems?.length > 0){

            const findingMeal = findMeal(nuevoItem.id);
            
            if(findingMeal.length > 0) {

                setCarItems(carItems.map(meal => {
                    if(meal.id === nuevoItem.id){
                        return {...meal, cantidad: meal.cantidad + 1};
                    }
                    return meal;
                }));

            } else {
                setCarItems([...carItems, nuevoItem]);
            }
        } else {
            
            setCarItems([nuevoItem]);
        }

    }

    const onRemoveItemsHandler = (id) => {
        const findingMeal = findMeal(id);

        if(isMealAddedAndHasItem(findingMeal)) {
            if(findMeal.cantidad > 1){
                setCarItems(carItems.map(meal => {
                    return {...meal, cantidad: meal.cantidad - 1};
                }));
            } else {
                setCarItems(carItems.filter(meal => meal.id !== id));
            }
        }
        
        console.log("comida eliminada", id);
    }

    const onClearItemsHandler = () => {
        setCarItems(null);
        setTotalPagar(0);
        setTotalMeals(0);
    }

    return (
        <CartContext.Provider
            value={{
                carItems: carItems,
                totalPagar: totalPagar,
                totalMeals: totalMeals,
                onAddItems: onAddItemsHandler,
                onRemoveItems: onRemoveItemsHandler,
                onClearItems: onClearItemsHandler}}>
            {children}
        </CartContext.Provider>
    );

}

export default CartContext;
