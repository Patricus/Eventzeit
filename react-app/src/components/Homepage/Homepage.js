import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../store/events";
import EventsCard from "../Events/Elements/EventsCard";

function Homepage() {
  const events = Object.values(useSelector(state => state.events));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);

  return (
    <main>
      <h1>Welcome to Eventzeit</h1>
      <div>
        <h2>Find something fun!</h2>
        <p>Eventzeit makes it easy for you to spend your time doing things you'll love!</p>
        <h2>Host your own event</h2>
        <p>Maybe you're planning your own event? Great, Eventzeit makes listing your event easy!</p>
      </div>
      <div>
        <h2>Up and coming events:</h2>
        {events &&
          events
            .filter(event => {
              return new Date(event.date) > new Date();
            })
            .sort((a, b) => {
              return new Date(a.date) - new Date(b.date);
            })
            .slice(0, 6)
            .map(event => {
              return <EventsCard key={event.id} event={event} />;
            })}
      </div>
    </main>
  );
}

export default Homepage;
