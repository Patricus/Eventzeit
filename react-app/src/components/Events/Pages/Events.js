import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../../store/events";
import EventsCard from "../Elements/EventsCard";

function Events() {
  const events = Object.values(useSelector((state) => state.events));
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
  const [sortBy, setSortBy] = useState("name");
  const [startDate, setStartDate] = useState(
    new Date(new Date().toString().split("GMT")[0] + " UTC")
      .toISOString()
      .split(".")[0]
      .slice(0, -3)
  );
  let createEndDate = new Date();
  createEndDate.setDate(createEndDate.getDate() + 7);
  const [endDate, setEndDate] = useState(
    new Date(createEndDate.toString().split("GMT")[0] + " UTC")
      .toISOString()
      .split(".")[0]
      .slice(0, -3)
  );

  useEffect(() => {
    dispatch(acquireEvents());
  }, [dispatch]);

  const checkCategories = (event) => {
    if (
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
    if (event.category === "Sport") return sport;
    if (event.category === "Party") return party;
    if (event.category === "Concert") return concert;
    if (event.category === "Dinner") return dinner;
    if (event.category === "Game") return game;
    if (event.category === "Search") return search;
    if (event.category === "Seminar") return seminar;
    if (event.category === "Conference") return conference;
    if (event.category === "Workshop") return workshop;
    if (event.category === "Class") return classCategory;
    if (event.category === "Auction") return auction;
    if (event.category === "Gala") return gala;
    if (event.category === "Festival") return festival;
    if (event.category === "Exercise") return exercise;
    if (event.category === "Celebration") return celebration;
    if (event.category === "Other") return other;
  };

  return (
    <main
      style={{
        textDecoration: "none",
      }}
    >
      <h1
        style={{
          marginTop: "80px",
        }}
      >
        Events
      </h1>
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
            <input
              type="checkbox"
              name={"game"}
              checked={game}
              onChange={() => setGame(!game)}
            />
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
            <input
              type="checkbox"
              name={"gala"}
              checked={gala}
              onChange={() => setGala(!gala)}
            />
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
          <span>
            <label htmlFor="search">Search Events: </label>
            <input
              name="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Events"
            />
          </span>
          <span>
            <label htmlFor="startDate">Start Date: </label>
            <input
              name="startDate"
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </span>
          <span>
            <label htmlFor="endDate">End Date: </label>
            <input
              name="endDate"
              type="datetime-local"
              min={startDate}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </span>
          <span>
            <label htmlFor="sortEvents">Sort Events By: </label>
            <select
              name="sortEvents"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value={"name"}>Name</option>
              <option value={"date"}>Date</option>
            </select>
          </span>
        </div>
      </div>
      {events &&
        events
          .filter((event) => {
            if (
              new Date(event.date) > new Date(startDate) &&
              new Date(event.date) < new Date(endDate)
            )
              return true;
            return false;
          })
          .filter((event) => {
            return checkCategories(event);
          })
          .filter((event) => {
            return event.name.match(new RegExp(search, "i"));
          })
          .sort((a, b) => {
            if (sortBy === "name") {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            }
            if (sortBy === "date") {
              return new Date(a.date) - new Date(b.date);
            }
            return a - b;
          })
          .map((event) => {
            return <EventsCard key={event.id} event={event} />;
          })}
    </main>
  );
}

export default Events;
