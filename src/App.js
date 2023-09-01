import Meals from "./components/Meals/Meals";
import './App.css';
import React from "react";
import Header from './components/Header/Header';


function getAllMeals(){
  const lMeals = [{
      id: Math.random(),
      nombre:"yakisoba",
      precio: 150,
      imagen: '../../../assets/Imgs_meals/yakisoba.jpg'
    },
    {
      id: Math.random(),
      nombre:"ramen",
      precio: 170,
      imagen: '../../../assets/Imgs_meals/ramen.jpg'
    },
    {
      id: Math.random(),
      nombre:"sushi",
      precio: 140,
      imagen: '../../../assets/Imgs_meals/sushi.jpg'
    },
    {
      id: Math.random(),
      nombre:"teriyaki",
      precio: 150,
      imagen: '../../../assets/Imgs_meals/teriyaki.jpg'
    },
    {
      id: Math.random(),
      nombre:"gyozas",
      precio: 130,
      imagen: '../../../assets/Imgs_meals/gyoza.jpg'
    }
  ]
  return lMeals;
}

function App() {
  const m = getAllMeals()
  return (
    <React.Fragment>

      <Header></Header>
      
      <Meals meals = {m}></Meals>

    </React.Fragment>
  );
}

export default App;
