import React from "react";

function EventsCard({ event }) {
  return (
    <div className="eventCard">
      <div>
        <h2>{event.name}</h2>
      </div>
      <div>{event.category}</div>
      <div>
        <img src={event.image} alt={event.name} />
      </div>
      <div>
        <span>{event.date}</span>
        <span>{event.price}</span>
      </div>
    </div>
  );
}

export default EventsCard;
