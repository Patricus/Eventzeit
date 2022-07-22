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
  const [streetAddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState(0);

  const submit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <div>
        <h2>Event Form</h2>
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input name="date" type="date" value={date} onChange={e => setDate(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input name="time" type="time" value={time} onChange={e => setTime(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          name="category"
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          name="image"
          type="text"
          value={image}
          onChange={e => setImage(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="occupany">Occupancy:</label>
        <input
          name="occupancy"
          type="number"
          min="1"
          value={occupancy}
          onChange={e => setOccupancy(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          name="price"
          type="number"
          min="0"
          value={price}
          onChange={e => setPrice(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="streetAddress">Street Address:</label>
        <input
          name="streetAddress"
          type="text"
          value={streetAddress}
          onChange={e => setStreetAddress(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input
          name="state"
          type="text"
          value={state}
          onChange={e => setState(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input name="city" type="text" value={city} onChange={e => setCity(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          name="zipCode"
          type="number"
          min="00000"
          max="99999"
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}></input>
      </div>
      <div>{formType ? <button>Create Event</button> : <button>Update Event</button>}</div>
    </form>
  );
}

export default EventForm;
