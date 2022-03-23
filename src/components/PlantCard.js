import React from "react";

function PlantCard({ plant, soldOut, setSoldOut, onDelete, setEditedPlant, setShowEditForm }) {

  function handleOutofStock() {
    setSoldOut([...soldOut, plant])
  }

  function handleInStock() {
    const newSoldOut = soldOut.filter(item => {
      return item.id !== plant.id
    })
    setSoldOut(newSoldOut);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    }).then(response => response.json())
      .then(onDelete(plant.id))
  }

  function handleEdit() {
    setEditedPlant(plant);
    setShowEditForm(true);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {!soldOut.find(item => item === plant) ? (
        <button className="primary" onClick={handleOutofStock}>In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
      <button className="edit" onClick={handleEdit}>Edit</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
