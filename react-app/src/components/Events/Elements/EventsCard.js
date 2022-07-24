import React from "react";
import { Link } from "react-router-dom";
import "./eventCard.css";

function EventsCard({ event }) {
  return (
    <div className="eventCard">
      <Link to={`/events/${event.id}`}>
        <div>
          <h2>{event.name}</h2>
        </div>
        <div>{event.category}</div>
        <div>
          <img src={event.event_image_url} alt={event.name} />
        </div>
        <div>
          <span>{event.date.split(" G")[0]}</span>
          <span>{event.price}</span>
        </div>
      </Link>
    </div>
  );
}

export default EventsCard;
