import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../../store/events";
import EventsCard from "../Elements/EventsCard";

function Events() {
  const events = Object.values(useSelector(state => state.events));
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState(false);
  const [party, setParty] = useState(false);
  const [concert, setConcert] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [game, setGame] = useState(false);
  const [seminar, setSeminar] = useState(false);
  const [conference, setConference] = useState(false);
  const [workshop, setWorkshop] = useState(false);
  const [social, setSocial] = useState(false);
  const [classCategory, setClassCategory] = useState(false);
  const [auction, setAuction] = useState(false);
  const [gala, setGala] = useState(false);
  const [festival, setFestival] = useState(false);
  const [exercise, setExercise] = useState(false);
  const [celebration, setCelebration] = useState(false);
  const [other, setOther] = useState(false);

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);

  const checkCategories = event => {
    if (
      !search &&
      !sport &&
      !party &&
      !concert &&
      !dinner &&
      !game &&
      !seminar &&
      !conference &&
      !workshop &&
      !social &&
      !classCategory &&
      !auction &&
      !gala &&
      !festival &&
      !exercise &&
      !celebration &&
      !other
    ) {
      return true;
    }
    if (event.category === "Search" && search) return true;
    if (event.category === "Sport" && sport) return true;
    if (event.category === "Party" && party) return true;
    if (event.category === "Concert" && concert) return true;
    if (event.category === "Dinner" && dinner) return true;
    if (event.category === "Game" && game) return true;
    if (event.category === "Search" && search) return true;
    if (event.category === "Seminar" && seminar) return true;
    if (event.category === "Conference" && conference) return true;
    if (event.category === "Workshop" && workshop) return true;
    if (event.category === "Class" && classCategory) return true;
    if (event.category === "Auction" && auction) return true;
    if (event.category === "Gala" && gala) return true;
    if (event.category === "Festival" && festival) return true;
    if (event.category === "Exercise" && exercise) return true;
    if (event.category === "Celebration" && celebration) return true;
    if (event.category === "Other" && other) return true;
  };

  return (
    <main>
      <h1>Events</h1>
      <div>
        <div>
          <span>
            <label htmlFor={"sport"}>Sport</label>
            <input
              type="checkbox"
              name={"sport"}
              checked={sport}
              onChange={() => setSport(!sport)}
            />
          </span>
          <span>
            <label htmlFor={"party"}>Party</label>
            <input
              type="checkbox"
              name={"party"}
              checked={party}
              onChange={() => setParty(!party)}
            />
          </span>
          <span>
            <label htmlFor={"concert"}>Concert</label>
            <input
              type="checkbox"
              name={"concert"}
              checked={concert}
              onChange={() => setConcert(!concert)}
            />
          </span>
          <span>
            <label htmlFor={"dinner"}>Dinner</label>
            <input
              type="checkbox"
              name={"dinner"}
              checked={dinner}
              onChange={() => setDinner(!dinner)}
            />
          </span>
          <span>
            <label htmlFor={"game"}>Game</label>
            <input type="checkbox" name={"game"} checked={game} onChange={() => setGame(!game)} />
          </span>
          <span>
            <label htmlFor={"seminar"}>Seminar</label>
            <input
              type="checkbox"
              name={"seminar"}
              checked={seminar}
              onChange={() => setSeminar(!seminar)}
            />
          </span>
          <span>
            <label htmlFor={"conference"}>Conference</label>
            <input
              type="checkbox"
              name={"conference"}
              checked={conference}
              onChange={() => setConference(!conference)}
            />
          </span>
          <span>
            <label htmlFor={"workshop"}>Workshop</label>
            <input
              type="checkbox"
              name={"workshop"}
              checked={workshop}
              onChange={() => setWorkshop(!workshop)}
            />
          </span>
          <span>
            <label htmlFor={"social"}>Social</label>
            <input
              type="checkbox"
              name={"social"}
              checked={social}
              onChange={() => setSocial(!social)}
            />
          </span>
          <span>
            <label htmlFor={"classCategory"}>Class</label>
            <input
              type="checkbox"
              name={"classCategory"}
              checked={classCategory}
              onChange={() => setClassCategory(!classCategory)}
            />
          </span>
          <span>
            <label htmlFor={"auction"}>Auction</label>
            <input
              type="checkbox"
              name={"auction"}
              checked={auction}
              onChange={() => setAuction(!auction)}
            />
          </span>
          <span>
            <label htmlFor={"gala"}>Gala</label>
            <input type="checkbox" name={"gala"} checked={gala} onChange={() => setGala(!gala)} />
          </span>
          <span>
            <label htmlFor={"festival"}>Festival</label>
            <input
              type="checkbox"
              name={"festival"}
              checked={festival}
              onChange={() => setFestival(!festival)}
            />
          </span>
          <span>
            <label htmlFor={"exercise"}>Exercise</label>
            <input
              type="checkbox"
              name={"exercise"}
              checked={exercise}
              onChange={() => setExercise(!exercise)}
            />
          </span>
          <span>
            <label htmlFor={"celebration"}>Celebration</label>
            <input
              type="checkbox"
              name={"celebration"}
              checked={celebration}
              onChange={() => setCelebration(!celebration)}
            />
          </span>
          <span>
            <label htmlFor={"other"}>Other</label>
            <input
              type="checkbox"
              name={"other"}
              checked={other}
              onChange={() => setOther(!other)}
            />
          </span>
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
            return checkCategories(event);
          })
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
