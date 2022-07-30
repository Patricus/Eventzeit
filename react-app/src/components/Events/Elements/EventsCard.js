import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./eventCard.css";

function EventsCard({ event }) {
  const [showHiddenText, setShowHiddenText] = useState(false);

  return (
    <Link className="card" to={`/events/${event.id}`}>
      <img src={event.event_image_url} className="card-image" alt="" />
      <div className="card-overlay">
        <div className="card-header">
          <svg className="card-arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className="card-header-text">
            {/* NAME START */}
            {event.name.length > 24 && (
              <h2 className="card-title">{event.name.slice(0, 24)} . . .</h2>
            )}
            {event.name.length <= 24 && (
              <h2 className="card-title">{event.name}</h2>
            )}
            {/* NAME END */}
            {/*  */}
            {/* EVENT DATE START */}
            <span className="card-status">
              {event.date.split(" G")[0].split(":").splice(0, 2).join(":")}
            </span>
            {/* EVENT DATE END */}
          </div>
        </div>
        {event.description.length > 74 && (
          <p className="card-description">
            {event.description.slice(0, 74)}
            <span className="dots">...</span>
          </p>
        )}
        {/* IF DESCRIPTION IS LESS THAN 500 CHARS */}
        {event.description.length <= 74 && (
          <p className="card-description">{event.description}</p>
        )}
      </div>
    </Link>
  );
}

export default EventsCard;
