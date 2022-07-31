import React from "react";
import { Link } from "react-router-dom";
import "./eventCard.css";

function EventsCard({ event }) {
  return (
    <Link className="card" to={`/events/${event.id}`}>
      <img src={event.event_image_url} className="card-image" alt="" />
      <div
        className="card-arc"
        style={{
          top: "0px",
          right: "33px",
          backgroundColor: "#A675A1",
          // backgroundColor: "#7E7F9A",
          zIndex: "2",
        }}
      >
        <div
          style={{
            height: "100%",
          }}
        >
          <div className="date-text">
            {event.date
              .split(" G")[0]
              .split(":")
              .splice(0, 2)
              .join(":")
              .slice(7, 11)
              .toUpperCase()}
          </div>
          <div className="date-number">
            {event.date
              .split(" G")[0]
              .split(":")
              .splice(0, 2)
              .join(":")
              .slice(5, 8)}
          </div>
        </div>
      </div>
      <div className="card-overlay">
        <div className="card-header">
          <div className="card-header-text">
            {/* NAME START */}
            {event.name.length > 18 && (
              <h2 className="card-title">{event.name.slice(0, 18)} . . .</h2>
            )}
            {event.name.length <= 18 && (
              <h2 className="card-title">{event.name}</h2>
            )}
            {/* NAME END */}
            {/*  */}
            {/* EVENT DATE START */}
            <span className="card-status">{event.category}</span>
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
