import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../../store/events";
import EventsCard from "../Elements/EventsCard";

function Events() {
  const events = Object.values(useSelector(state => state.events));
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const categories = [
    "Sport",
    "Party",
    "Concert",
    "Dinner",
    "Game",
    "Seminar",
    "Conference",
    "Workshop",
    "Social",
    "Class",
    "Auction",
    "Gala",
    "Festival",
    "Exercise",
    "Celebration",
    "Other",
  ];

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);

  return (
    <main>
      <h1>Events</h1>
      <div>
        <div>
          {categories &&
            categories.map(category => {
              return (
                <span key={category}>
                  <label htmlFor={category}>{category}</label>
                  <input type="checkbox" name={category} />
                </span>
              );
            })}
        </div>
        <div>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search Events"
          />
        </div>
      </div>
      {events &&
        events
          .filter(event => {
            return event.name.match(new RegExp(search, "i"));
          })
          .map(event => {
            return <EventsCard key={event.id} event={event} />;
          })}
    </main>
  );
}

export default Events;
