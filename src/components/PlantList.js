import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToDisplay, soldOut, setSoldOut, onDelete, setEditedPlant, setShowEditForm }) {
  const plantsArray = plantsToDisplay.map(plant => {
    return <PlantCard 
      key={plant.id} 
      plant={plant} 
      soldOut={soldOut} 
      setSoldOut={setSoldOut} 
      onDelete={onDelete} 
      setEditedPlant={setEditedPlant} 
      setShowEditForm={setShowEditForm} />
  })
  return (
    <ul className="cards">{plantsArray}</ul>
  );
}

export default PlantList;
