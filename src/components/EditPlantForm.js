import React from "react";

function EditPlantForm({ showEditForm, setShowEditForm, editedPlant, setEditedPlant, onEditedPlantSubmit }) {
  function editPlant(event) {
    setEditedPlant({...editedPlant, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:6001/plants/${editedPlant.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(editedPlant)
    })
      .then(response => response.json())
      .then(postedPlant => onEditedPlantSubmit(postedPlant))
    setEditedPlant({
      name: "",
      price: "",
      image: ""
    })
    setShowEditForm(false);
    event.target.reset();
  }
  return (
    <div className="new-plant-form edit-plant-form" style={showEditForm ? {display: "block"} : {display: "none"}}>
      <h2>Edit Plant</h2>
      <form onSubmit={(event) => handleSubmit(event)} >
        <input type="text" name="name" placeholder="Plant name" value={editedPlant.name} onChange={(event) => editPlant(event)}/>
        <input type="text" name="image" placeholder="Image URL" value={editedPlant.image} onChange={(event) => editPlant(event)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={editedPlant.price} onChange={(event) => editPlant(event)} />
        <button type="submit">Submit Edits</button>
      </form>
    </div>
  );
}

export default EditPlantForm;
