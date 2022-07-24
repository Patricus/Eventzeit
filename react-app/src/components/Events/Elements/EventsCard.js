import React from "react";
import { Link } from "react-router-dom";
import "./eventCard.css";

function EventsCard({ event }) {
  return (
    <Link to={`/events/${event.id}`}>
      <div className="eventCard">
        <div>
          <h2>{event.name}</h2>
        </div>
        <div>{event.category}</div>
        <div>
          <img src={event.event_image_url} alt={event.name} />
        </div>
        <div>
          <span>{event.date}</span>
          <span>{event.price}</span>
        </div>
      </div>
    </Link>
  );
}

export default EventsCard;
