import React from "react";

function NewPlantForm({ newPlant, setNewPlant, onNewPlantSubmit }) {
  function changePlant(event) {
    setNewPlant({...newPlant, [event.target.name]: event.target.value})
    console.log(newPlant)
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(response => response.json())
      .then(postedPlant => onNewPlantSubmit(postedPlant))
    event.target.reset();
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(event) => handleSubmit(event)} >
        <input type="text" name="name" placeholder="Plant name" onChange={(event) => changePlant(event)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(event) => changePlant(event)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(event) => changePlant(event)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
