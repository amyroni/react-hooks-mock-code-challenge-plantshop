import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [filter, setFilter] = useState("");
  const [newPlant, setNewPlant] = useState({
    name: "",
    price: "",
    image: ""
  })
  const [editedPlant, setEditedPlant] = useState({
    name: "",
    price: "",
    image: ""
  })
  const [soldOut, setSoldOut] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
 
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data))
  }, [])

  function handleNewPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleDelete(id) {
    const newPlants = plants.filter(plant => {
      return plant.id !== id
    })
    setPlants(newPlants);
  }

  function handleEditPlant(updatedPlant) {
    const newPlants = plants.map(plant => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant
      } else { 
        return plant 
      }
    })
    setPlants(newPlants);
  }

  const plantsToDisplay = plants.filter(plant => {
    if (filter !== "") {
      return plant.name.toLowerCase().includes(filter)
    } else {
      return true
    }
  })

  return (
    <div className="app">
      <Header />
      <PlantPage
        plantsToDisplay={plantsToDisplay}
        newPlant={newPlant}
        setNewPlant={setNewPlant}
        onNewPlantSubmit={handleNewPlant}
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
        editedPlant={editedPlant} 
        setEditedPlant={setEditedPlant} 
        onEditedPlantSubmit={handleEditPlant}
        filter={filter}
        setFilter={setFilter}
        soldOut={soldOut}
        setSoldOut={setSoldOut}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
