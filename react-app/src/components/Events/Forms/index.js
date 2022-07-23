import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeEvent, editEvent } from "../../../store/events";

function EventForm({ event = null }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Water");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [occupancy, setOccupancy] = useState(1);
  const [price, setPrice] = useState(0);
  const [streetAddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);

  useEffect(() => {
    if (event) {
      setName(event.name);
      setDate(event.date);
      setCategory(event.category);
      setDescription(event.description);
      setImage(event.image);
      setOccupancy(event.occupancy);
      setPrice(event.price);
      setStreetAddress(event.streetAddress);
      setState(event.state);
      setCity(event.city);
      setZipCode(event.zipCode);
    }
  }, [event]);

  const submit = async e => {
    e.preventDefault();
    setErrors([]);

    if (!userId) {
      setErrors(["You must be logged in to create or edit an event."]);
      return;
    }

    try {
      if (!event) {
        await dispatch(
          makeEvent({
            user_id: userId,
            category,
            name,
            event_image_url: image,
            date,
            description,
            price,
            max_occupancy: occupancy,
            street_address: streetAddress,
            city,
            state,
            zip_code: zipCode,
          })
        );
      } else {
        await dispatch(
          editEvent({
            event_id: event.id,
            user_id: userId,
            category,
            name,
            event_image_url: image,
            date,
            description,
            price,
            max_occupancy: occupancy,
            street_address: streetAddress,
            city,
            state,
            zip_code: zipCode,
          })
        );
      }
    } catch (e) {
      const data = await e.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    }
  };

  return (
    <form onSubmit={submit}>
      <div>
        <h2>Event Form</h2>
      </div>
      <div>
        <ul>
          {errors &&
            errors.map(error => {
              return <li>{error}</li>;
            })}
        </ul>
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          name="date"
          type="datetime-local"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value={"Water"}>Water</option>
          <option value={"Fire"}>Fire</option>
          <option value={"Earth"}>Earth</option>
          <option value={"Air"}>Air</option>
          <option value={"Heart"}>Heart</option>
        </select>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input name="image" type="text" value={image} onChange={e => setImage(e.target.value)} />
      </div>
      <div>
        <label htmlFor="occupany">Occupancy:</label>
        <input
          name="occupancy"
          type="number"
          min="1"
          value={occupancy}
          onChange={e => setOccupancy(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          name="price"
          type="number"
          min="0"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="streetAddress">Street Address:</label>
        <input
          name="streetAddress"
          type="text"
          value={streetAddress}
          onChange={e => setStreetAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input name="state" type="text" value={state} onChange={e => setState(e.target.value)} />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input name="city" type="text" value={city} onChange={e => setCity(e.target.value)} />
      </div>
      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          name="zipCode"
          type="number"
          min="00000"
          max="99999"
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
        />
      </div>
      <div>{event ? <button>Update Event</button> : <button>Create Event</button>}</div>
    </form>
  );
}

export default EventForm;
