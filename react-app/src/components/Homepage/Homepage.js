import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../store/events";
import EventsCard from "../Events/Elements/EventsCard";
import "../Events/Elements/eventCard.css";
import "../User/dashboard.css";
import "./homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  const events = Object.values(useSelector((state) => state.events));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);

  return (
    <main>
      <div
        className="landing-image"
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            marginLeft: "13em",
            marginTop: "21em",
            height: "80px",
          }}
        >
          <Link
            to={"/events/"}
            style={{
              textDecoration: "none",
            }}
          >
            <div className="find-events-btn">Find Your Next Event</div>
          </Link>
        </div>
      </div>
      <h1 id="splash-welcome">Welcome to Eventzeit!</h1>
      {/* <div>
        <h2 className="little-splash-title">Find something fun!</h2>
        <p className="little-splash-blurb">
          Eventzeit makes it easy for you to spend your time doing things you'll
          love!
        </p>
        <h2 className="little-splash-title">Host your own event</h2>
        <p className="little-splash-blurb">
          Maybe you're planning your own event? Great, Eventzeit makes listing
          your event easy!
        </p>
      </div> */}
      <h2 id="up-coming-events" className="little-splash-title">
        Upcoming Events:
      </h2>
      <div
        className="eventsHolder"
        style={{
          justifyContent: "center",
          marginLeft: "4vw",
        }}
      >
        {events &&
          events
            .filter((event) => {
              return new Date(event.date) > new Date();
            })
            .sort((a, b) => {
              return new Date(a.date) - new Date(b.date);
            })
            .slice(0, 14)
            .map((event) => {
              return (
                <div
                  key={event.id}
                  style={{
                    height: "433px",
                    width: "433px",
                    margin: "11px",
                  }}
                >
                  <EventsCard key={event.id} event={event} />
                </div>
              );
            })}
      </div>
    </main>
  );
}

export default Homepage;
