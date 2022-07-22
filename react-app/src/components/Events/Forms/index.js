import React, { useState } from "react";

function EventForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState(1);
  const [description, setDesription] = useState("");
  const [image, setImage] = useState("");
  const [occupany, setOccupancy] = useState(1);
  const [price, setPrice] = useState(0);
  const [coordinateLat, setCoordinateLat] = useState(0.0);
  const [coordinateLng, setCoordinateLng] = useState(0.0);

  return (
    <form>
      <div>Event Form</div>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
    </form>
  );
}

export default EventForm;
