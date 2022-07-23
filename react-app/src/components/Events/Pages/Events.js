import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../../store/event";
import EventsCard from "../Elements/EventsCard";

function Events() {
  const events = useSelector(state => state.events);
  console.log("events", events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acquireEvents());
  });
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
