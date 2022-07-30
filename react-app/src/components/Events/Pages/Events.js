import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../../store/events";
import EventsCard from "../Elements/EventsCard";
import "../../../index.css";
import sportsImg from "../../../images/sports.png";
// import "./events.css";

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
    const [sortBy, setSortBy] = useState("name");
    const [startDate, setStartDate] = useState(
        new Date(new Date().toString().split("GMT")[0] + " UTC")
            .toISOString()
            .split(".")[0]
            .slice(0, -3)
    );
    const [endDate, setEndDate] = useState(startDate);

    useEffect(() => {
        dispatch(acquireEvents());
    }, [dispatch]);

    const checkCategories = event => {
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
        if (event.category === "Social") return social;
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
            }}>
            <h1
                style={{
                    marginTop: "80px",
                    fontFamily: "Eina-bold",
                    color: "#191923",
                    fontSize: "90px",
                }}>
                Events
            </h1>
            <div>
                <div
                    style={{
                        marginTop: "10vh",
                    }}>
                    <span>
                        <label htmlFor="search">Search Events: </label>
                        <input
                            name="search"
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search Events"
                        />
                    </span>
                    <span>
                        <label htmlFor="startDate">Start Date: </label>
                        <input
                            name="startDate"
                            type="datetime-local"
                            max={endDate}
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                        />
                    </span>
                    <span>
                        <label htmlFor="endDate">End Date: </label>
                        <input
                            name="endDate"
                            type="datetime-local"
                            min={startDate}
                            value={endDate}
                            onChange={e => setEndDate(e.target.value)}
                        />
                    </span>
                    <span>
                        <label htmlFor="sortEvents">Sort Events By: </label>
                        <select
                            name="sortEvents"
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value)}>
                            <option value={"name"}>Name</option>
                            <option value={"date"}>Date</option>
                        </select>
                    </span>
                </div>
                <div>
                    {sport ? (
                        <span>
                            <button
                                onClick={() => setSport(!sport)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                <img
                                    src={sportsImg}
                                    style={{
                                        width: "19px",
                                    }}
                                />
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setSport(!sport)}>Sport</button>
                        </span>
                    )}
                    {party ? (
                        <span>
                            <button
                                onClick={() => setParty(!party)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Party
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setParty(!party)}>Party</button>
                        </span>
                    )}
                    {concert ? (
                        <span>
                            <button
                                onClick={() => setConcert(!concert)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Concert
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setConcert(!concert)}>Concert</button>
                        </span>
                    )}
                    {dinner ? (
                        <span>
                            <button
                                onClick={() => setDinner(!dinner)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Dinner
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setDinner(!dinner)}>dinner</button>
                        </span>
                    )}
                    {game ? (
                        <span>
                            <button
                                onClick={() => setGame(!game)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Game
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setGame(!game)}>Game</button>
                        </span>
                    )}
                    {seminar ? (
                        <span>
                            <button
                                onClick={() => setSeminar(!seminar)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Seminar
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setSeminar(!seminar)}>Seminar</button>
                        </span>
                    )}
                    {conference ? (
                        <span>
                            <button
                                onClick={() => setConference(!conference)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Conference
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setConference(!conference)}>Conference</button>
                        </span>
                    )}
                    {workshop ? (
                        <span>
                            <button
                                onClick={() => setWorkshop(!workshop)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Workshop
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setWorkshop(!workshop)}>Workshop</button>
                        </span>
                    )}
                    {social ? (
                        <span>
                            <button
                                onClick={() => setSocial(!social)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Social
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setSocial(!social)}>Social</button>
                        </span>
                    )}
                    {classCategory ? (
                        <span>
                            <button
                                onClick={() => setClassCategory(!classCategory)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Class
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setClassCategory(!classCategory)}>Class</button>
                        </span>
                    )}
                    {auction ? (
                        <span>
                            <button
                                onClick={() => setAuction(!auction)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Auction
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setAuction(!auction)}>Auction</button>
                        </span>
                    )}
                    {gala ? (
                        <span>
                            <button
                                onClick={() => setGala(!gala)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Gala
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setGala(!gala)}>Gala</button>
                        </span>
                    )}
                    {festival ? (
                        <span>
                            <button
                                onClick={() => setFestival(!festival)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Festival
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setFestival(!festival)}>Festival</button>
                        </span>
                    )}
                    {exercise ? (
                        <span>
                            <button
                                onClick={() => setExercise(!exercise)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Exercise
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setExercise(!exercise)}>Exercise</button>
                        </span>
                    )}
                    {celebration ? (
                        <span>
                            <button
                                onClick={() => setCelebration(!celebration)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Celebration
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setCelebration(!celebration)}>
                                Celebration
                            </button>
                        </span>
                    )}
                    {other ? (
                        <span>
                            <button
                                onClick={() => setOther(!other)}
                                style={{
                                    border: "3px solid",
                                    borderColor: "red",
                                }}>
                                Other
                            </button>
                        </span>
                    ) : (
                        <span>
                            <button onClick={() => setOther(!other)}>Other</button>
                        </span>
                    )}
                </div>
            </div>
            <div
                style={{
                    //justifyContent: "space-between",
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "10vh",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    // width: "900px",
                }}>
                {events &&
                    events
                        .filter(event => {
                            if (startDate === endDate) return true;
                            if (
                                new Date(event.date) > new Date(startDate) &&
                                new Date(event.date) < new Date(endDate)
                            )
                                return true;
                            return false;
                        })
                        .filter(event => {
                            return checkCategories(event);
                        })
                        .filter(event => {
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
                        .map(event => {
                            return (
                                <div className="event" id="event">
                                    <EventsCard key={event.id} event={event} />
                                </div>
                            );
                        })}
            </div>
        </main>
    );
}

export default Events;
