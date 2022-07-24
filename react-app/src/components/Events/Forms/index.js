import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeEvent, editEvent } from "../../../store/events";

function EventForm({ event = null }) {
  (() => {
    if (!event) return;
    let newDate = new Date(new Date(event.date).toString().split("GMT")[0] + " UTC")
      .toISOString()
      .split(".")[0];
    newDate = newDate.slice(0, newDate.length - 3);
    event.date = newDate;
  })();
  const [name, setName] = useState((event && event.name) || "");
  const [date, setDate] = useState((event && event.date) || "");
  const [category, setCategory] = useState((event && event.category) || "Water");
  const [description, setDescription] = useState((event && event.description) || "");
  const [image, setImage] = useState((event && event.event_image_url) || "");
  const [occupancy, setOccupancy] = useState((event && event.max_occupancy) || 1);
  const [price, setPrice] = useState((event && event.price) || 0);
  const [streetAddress, setStreetAddress] = useState((event && event.street_address) || "");
  const [state, setState] = useState((event && event.state) || "");
  const [city, setCity] = useState((event && event.city) || "");
  const [zipCode, setZipCode] = useState((event && event.zip_code) || 0);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);
  const states = [ "AK - Alaska",
                "AL - Alabama",
                "AR - Arkansas",
                "AS - American Samoa",
                "AZ - Arizona",
                "CA - California",
                "CO - Colorado",
                "CT - Connecticut",
                "DC - District of Columbia",
                "DE - Delaware",
                "FL - Florida",
                "GA - Georgia",
                "GU - Guam",
                "HI - Hawaii",
                "IA - Iowa",
                "ID - Idaho",
                "IL - Illinois",
                "IN - Indiana",
                "KS - Kansas",
                "KY - Kentucky",
                "LA - Louisiana",
                "MA - Massachusetts",
                "MD - Maryland",
                "ME - Maine",
                "MI - Michigan",
                "MN - Minnesota",
                "MO - Missouri",
                "MS - Mississippi",
                "MT - Montana",
                "NC - North Carolina",
                "ND - North Dakota",
                "NE - Nebraska",
                "NH - New Hampshire",
                "NJ - New Jersey",
                "NM - New Mexico",
                "NV - Nevada",
                "NY - New York",
                "OH - Ohio",
                "OK - Oklahoma",
                "OR - Oregon",
                "PA - Pennsylvania",
                "PR - Puerto Rico",
                "RI - Rhode Island",
                "SC - South Carolina",
                "SD - South Dakota",
                "TN - Tennessee",
                "TX - Texas",
                "UT - Utah",
                "VA - Virginia",
                "VI - Virgin Islands",
                "VT - Vermont",
                "WA - Washington",
                "WI - Wisconsin",
                "WV - West Virginia",
                "WY - Wyoming"]

  const categories = ["Sport", "Party", "Concert", "Dinner", "Game", "Seminar", "Conference", "Workshop",
            "Social", "Class", "Auction", "Gala", "Festival", "Exercise", "Celebration", "Other"]

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
            id: event.id,
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
    <div>
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
          <label htmlFor="occupancy">Occupancy:</label>
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
    </div>
  );
}

export default EventForm;
