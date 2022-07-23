import React from "react";
import { useSelector } from "react-redux";
import EventsCard from "../Elements/EventsCard";

function Events() {
  const events = Object.values(useSelector(state => state.events));
  return (
    <main>
      <h1>Events</h1>
      {events &&
        events.map(event => {
          return <EventsCard event={event} />;
        })}
    </main>
  );
}

export default Events;
