import Meals from "./components/Meals/Meals";
import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import useHttp from "./components/Hooks/use-http";
import {CartContextProvider} from "./components/Contexts/CartContext";

const MEALS_URL = "https://reactmeals-162f9-default-rtdb.firebaseio.com/";

function App() {
  const { isLoadingCH, errorCH, request } = useHttp();

  const loadingMessage = <h1>Cargando comidas ... </h1>;
  const errorMessage = <h2>{errorCH}</h2>;

  const [meals, setMeals] = useState([{}]);

  useEffect(() => {
    const fetchUser = async () => {
      const url = `${MEALS_URL}/meals.json?orderBy="$key"`;
      const data = await request({ url });

      const mealsArray = [];

      for (const id in data) {
        if (data.hasOwnProperty(id)) { // buscamos los registros que tienen una llave que al mismo tiempo es su valor.
          const item = {
            id: id, // creamos el objeto con un id siendo el valor de la llave-valor
            ...data[id], // incluimos las propiedades de este objeto
          };
          mealsArray.push(item); // agregamos el objeto compuesto a un array temporal
        }
      }

      setMeals(mealsArray); // lo pasamos al estado meals (contenedor de los meals)
    };

    fetchUser();
  }, []);

  return (
    <React.Fragment>
      {isLoadingCH && loadingMessage}
      {errorCH && errorMessage}
      {!isLoadingCH && !errorCH && (
        <CartContextProvider>
          <Header key="header"></Header>
          <Meals key="meals" meals={meals}></Meals>
        </CartContextProvider>
      )}
    </React.Fragment>
  );
}

export default App;
