import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../../store/events";
import EventsCard from "../Elements/EventsCard";

function Events() {
  const events = Object.values(useSelector(state => state.events));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);
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
