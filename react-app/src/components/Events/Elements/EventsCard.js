import React from "react";
import { Link } from "react-router-dom";
import "./eventCard.css";

function EventsCard({ event }) {
  return (
    <div className="main">
      <div
        className="eventCard"
        style={{
          "--imageUrl": "url(" + `${event.event_image_url}` + ")",
        }}
      >
        <Link
          to={`/events/${event.id}`}
          style={{
            textDecoration: "none",
            color: "#191923",
          }}
        >
          <div
            className="info"
            style={{
              "--imageUrl": "url(" + `${event.event_image_url}` + ")",
            }}
          >
            <div className="title">
              <h2
                style={{
                  color: "#191923",
                }}
              >
                {event.name}
              </h2>
            </div>
            <div className="description">
              <div
                style={{
                  color: "#7E7F9A",
                }}
              >
                {event.category}
              </div>
              <div>
                <span>
                  {event.date.split(" G")[0].split(":").splice(0, 2).join(":")}
                </span>
              </div>
            </div>
            {/* <div>
              <img src={event.event_image_url} alt={event.name} />
            </div> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EventsCard;
