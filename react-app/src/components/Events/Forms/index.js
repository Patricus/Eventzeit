import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeEvent, aquireEvent } from "../../../store/event";

function EventForm({ formType }) {
  const eventId = useParams();

  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState(1);
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

  useEffect(() => {
    if (eventId) {
      const event = useSelector((state) => state.events[eventId]);
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
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!userId) {
      setErrors(["You must be logged in to create an event."]);
      return;
    }

    try {
      if (formType) {
        const event = await dispatch(
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
        const event = await dispatch(
          editEvent({
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
      const data = await e.json()
      if (data && data.errors) {
        setErrors(data.errors)
      }
    }
  };

  const userId = useSelector((state) => state.session.user.id);

  return (
    <form onSubmit={submit}>
      <div>
        <h2>Event Form</h2>
      </div>
      <div>
        <ul>
          {errors &&
            errors.map((error) => {
              return <li>{error}</li>;
            })}
        </ul>
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          name="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          name="category"
          type="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value={"Water"}>Water</option>
          <option value={"Fire"}>Fire</option>
          <option value={"Earth"}>Earth</option>
          <option value={"Air"}>Air</option>
          <option value={"Heart"}>Heart</option>
        </input>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          name="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="occupany">Occupancy:</label>
        <input
          name="occupancy"
          type="number"
          min="1"
          value={occupancy}
          onChange={(e) => setOccupancy(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          name="price"
          type="number"
          min="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="streetAddress">Street Address:</label>
        <input
          name="streetAddress"
          type="text"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input
          name="state"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          name="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          name="zipCode"
          type="number"
          min="00000"
          max="99999"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        ></input>
      </div>
      <div>
        {formType ? (
          <button>Create Event</button>
        ) : (
          <button>Update Event</button>
        )}
      </div>
    </form>
  );
}

export default EventForm;
