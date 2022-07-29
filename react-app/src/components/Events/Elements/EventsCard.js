import React from "react";
import { Link } from "react-router-dom";
import "./eventCard.css";

function EventsCard({ event }) {
    return (
        <div className="eventCard">
            <Link
                to={`/events/${event.id}`}
                style={{
                    textDecoration: "none",
                }}>
                <div>
                    <h2
                        style={{
                            color: "#191923",
                        }}>
                        {event.name}
                    </h2>
                </div>
                <div
                    style={{
                        color: "#7E7F9A",
                    }}>
                    {event.category}
                </div>
                <div>
                    <img src={event.event_image_url} alt={event.name} />
                </div>
                <div>
                    <span>{event.date.split(" G")[0].split(":").splice(0, 2).join(":")}</span>
                </div>
            </Link>
        </div>
    );
}

export default EventsCard;
