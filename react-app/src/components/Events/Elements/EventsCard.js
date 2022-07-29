import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./eventCard.css";

function EventsCard({ event }) {
    const [showHiddenText, setShowHiddenText] = useState(false);

    return (
        <div
            className="main"
            style={
                {
                    // height: "300px"
                }
            }>
            <div
                className="eventCard"
                style={{
                    "--imageUrl": `url(${event.event_image_url})`,
                    // height: "300px"
                }}>
                <Link
                    className="main-link"
                    to={`/events/${event.id}`}
                    style={{
                        textDecoration: "none",
                        color: "#191923",
                        // height: "300px"
                    }}>
                    <div
                        className="info"
                        style={{
                            "--imageUrl": `url(${event.event_image_url})`,
                        }}>
                        {event.name.length > 24 && (
                            <div className="title">
                                <h2
                                    style={{
                                        color: "#191923",
                                    }}>
                                    {event.name.slice(0, 24)} . . .
                                </h2>
                            </div>
                        )}
                        {event.name.length <= 24 && (
                            <div className="title">
                                <h2
                                    style={{
                                        color: "#191923",
                                    }}>
                                    {event.name}
                                </h2>
                            </div>
                        )}
                        <div className="category-date">
                            <div
                                style={{
                                    color: "#FF521B",
                                }}>
                                {event.category}
                            </div>
                            <div
                                style={{
                                    color: "#7E7F9A",
                                }}>
                                <span>
                                    {event.date.split(" G")[0].split(":").splice(0, 2).join(":")}
                                </span>
                            </div>
                            {event.description.length > 74 && (
                                <div
                                    className="description-text"
                                    style={{
                                        width: "90%",
                                    }}>
                                    <h3>
                                        {event.description.slice(0, 74)}
                                        {showHiddenText && (
                                            <span className="more-text">
                                                {event.description.slice(500)}
                                            </span>
                                        )}
                                        {!showHiddenText && <span className="dots">...</span>}
                                        {showHiddenText && (
                                            <span>
                                                <button
                                                    onClick={() =>
                                                        setShowHiddenText(!showHiddenText)
                                                    }
                                                    style={{
                                                        fontFamily: "Eina-semibold",
                                                        color: "#FF521B",
                                                        background: "none",
                                                        marginLeft: "14px",
                                                        border: "none",
                                                        fontSize: "18px",
                                                    }}>
                                                    Less
                                                </button>
                                            </span>
                                        )}
                                    </h3>
                                </div>
                            )}
                            {/* IF DESCRIPTION IS LESS THAN 500 CHARS */}
                            {event.description.length <= 500 && (
                                <h3
                                    className="description-text"
                                    style={{
                                        width: "90%",
                                    }}>
                                    {event.description}
                                </h3>
                            )}
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
