import React, { useState } from "react";

function EventForm({ formType }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [category, setCategory] = useState(1);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [occupancy, setOccupancy] = useState(1);
  const [price, setPrice] = useState(0);
  const [coordinateLat, setCoordinateLat] = useState(0.0);
  const [coordinateLng, setCoordinateLng] = useState(0.0);

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submit}>
      <div>Event Form</div>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="date">Date:</label>
      <input name="date" type="date" value={date} onChange={e => setDate(e.target.value)}></input>
      <label htmlFor="time">Time:</label>
      <input name="time" type="time" value={time} onChange={e => setTime(e.target.value)}></input>
      <label htmlFor="category">Category:</label>
      <input name="category" type="text" value={category} onChange={e => setCategory(e.target.value)}></input>
      <label htmlFor="description">Description:</label>
      <input name="description" type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
      <label htmlFor="image">Image:</label>
      <input name="image" type="text" value={image} onChange={e => setImage(e.target.value)}></input>
      <label htmlFor="occupany">Occupancy:</label>
      <input name="occupancy" type="number" min="1" value={occupancy} onChange={e => setOccupancy(e.target.value)}></input>
      <label htmlFor="price">Price:</label>
      <input name="price" type="number" min="0" value={price} onChange={e => setPrice(e.target.value)}></input>
      <label htmlFor="coordinateLat">Latitude:</label>
      <input name="coordinateLat" type="number" min="-90" max="90" step="0.1" value={coordinateLat} onChange={e => setCoordinateLat(e.target.value)}></input>
      <label htmlFor="coordinateLng">Longitude:</label>
      <input name="coordinateLng" type="number" min="-180" max="180" step="0.1" value={coordinateLng} onChange={e => setCoordinateLng(e.target.value)}></input>
      { formType ? <button>Create Event</button> : <button>Update Event</button> }
    </form>
  );
}

export default EventForm;
