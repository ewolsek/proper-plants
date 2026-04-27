import { useState } from "react";
import "./index.css"
import PlantGrid from "./components/PlantGrid";
import PlantCard from "./components/PlantCard";
import PLANTS from "./data"

export default function App() {
  const [plants, setPlants] = useState([]);
  const addPlants = (plant) => {
    const plantExists = plants.find((i) => i.id === plant.id);
    if (plantExists) {
      setPlants(
        plants.map ((plant) =>
        plant.id === PlantCard.id
      ? {...plant, quantity: plant.quantity + 1}
    : plant
        )
      );
    } else {
      const item ={...PlantGrid, quantity: 1 };
      setPlants ([...plants, item]);
    }
  const removePlants = (plantToRemove) => {
    setPlants(
      plants
      .map((plant) =>
      plant.id === plantToRemove.id 
    ? {...plant, quantity: plant.quantity - 1}
  : plant
    )
    .filter ((plant) => plant.quantity > 0)
  );
  };
  }
  return (
    <>
    <Product product={PLANTS} addPlants={addPlants} />
    <Plants plants={plants} removePlants={removePlants} />
    </>
  );
}