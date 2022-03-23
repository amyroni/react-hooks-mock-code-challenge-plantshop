import React from "react";
import NewPlantForm from "./NewPlantForm";
import EditPlantForm from "./EditPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ 
  plantsToDisplay, 
  showEditForm, 
  setShowEditForm, 
  newPlant, 
  setNewPlant, 
  onNewPlantSubmit, 
  editedPlant, 
  setEditedPlant, 
  onEditedPlantSubmit, 
  filter, 
  setFilter, 
  onFilterChange, 
  soldOut, 
  setSoldOut, 
  onDelete
  }) {
  return (
    <main>
      <NewPlantForm 
        newPlant={newPlant} 
        setNewPlant={setNewPlant} 
        onNewPlantSubmit={onNewPlantSubmit} />
      <EditPlantForm 
        showEditForm={showEditForm} 
        setShowEditForm={setShowEditForm} 
        editedPlant={editedPlant} 
        setEditedPlant={setEditedPlant} 
        onEditedPlantSubmit={onEditedPlantSubmit} />
      <Search filter={filter} setFilter={setFilter} onFilterChange={onFilterChange} />
      <PlantList 
        plantsToDisplay={plantsToDisplay} 
        soldOut={soldOut} 
        setSoldOut={setSoldOut} 
        onDelete={onDelete} 
        setEditedPlant={setEditedPlant}
        setShowEditForm={setShowEditForm}
      />
    </main>
  );
}

export default PlantPage;
