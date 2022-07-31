import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../../store/events";
import EventsCard from "../Elements/EventsCard";
// import "../../../index.css";
import sportsImg from "../../../images/sports-cat.jpg";
import partyImg from "../../../images/party-cat.jpg";
import concertImg from "../../../images/concert-cat.jpg";
import dinnerImg from "../../../images/dinner-cat.jpg";
import gameImg from "../../../images/game-cat.jpg";
import seminarImg from "../../../images/seminar-cat.jpg";
import conferenceImg from "../../../images/conference-cat.jpg";
import workshopImg from "../../../images/workshop-cat.jpg";
import socialImg from "../../../images/social-cat.jpg";
import classImg from "../../../images/class-cat.jpg";
import auctionImg from "../../../images/auction-cat.jpg";
import galaImg from "../../../images/gala-cat.jpg";
import festivalImg from "../../../images/festival-cat.jpg";
import exerciseImg from "../../../images/exercise-cat.jpg";
import celebrationImg from "../../../images/celebration-cat.jpg";
import otherImg from "../../../images/other-cat.jpg";

import sportsIcon from "../../../images/sports.png";
import partyIcon from "../../../images/party.png";
import concertIcon from "../../../images/concert.png";
import dinnerIcon from "../../../images/dinner.png";
import gameIcon from "../../../images/game.png";
import seminarIcon from "../../../images/seminar.png";
import conferenceIcon from "../../../images/conference.png";
import workshopIcon from "../../../images/workshop.png";
import socialIcon from "../../../images/social.png";
import classIcon from "../../../images/class.png";
import auctionIcon from "../../../images/auction.png";
import galaIcon from "../../../images/gala.png";
import festivalIcon from "../../../images/festival.png";
import exerciseIcon from "../../../images/exercise.png";
import celebrationIcon from "../../../images/celebration.png";
import otherIcon from "../../../images/other.png";
import "../Elements/eventCard.css";
import "../../User/dashboard.css";
import "./events.css";

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
  const [endDate, setEndDate] = useState(startDate);

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
    <main>
      <h1
        style={{
          marginTop: "30px",
          marginLeft: "5vw",
          fontFamily: "Eina-bold",
          color: "#191923",
          fontSize: "110px",
        }}
      >
        Events
      </h1>
      <div>
        <div
          style={{
            marginTop: "2vh",
            marginLeft: "5vw",
          }}
        >
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
              max={endDate}
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
        <h1
          style={{
            marginTop: "20px",
            fontFamily: "Eina-bold",
            marginLeft: "100px",
          }}
        >
          Search By Category
        </h1>
        <div
          style={{
            marginLeft: "5vw",
            marginTop: "18px",
            marginBottom: "20px",
          }}
        >
          {sport ? (
            <span>
              <button
                className="button"
                onClick={() => setSport(!sport)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                  backgroundImage: { sportsImg },
                }}
              >
                <figure
                  className="outer-figure"
                  style={{
                    backgroundColor: "#FF521B",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Sport</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className=" button"
                onClick={() => setSport(!sport)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + sportsImg + ")",
                    "--sportsIcon": "url(" + sportsIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Sport</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {party ? (
            <span>
              <button
                className="button"
                onClick={() => setParty(!party)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Sport</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className=" button"
                onClick={() => setParty(!party)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + partyImg + ")",
                    "--sportsIcon": "url(" + partyIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Party</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {concert ? (
            <span>
              <button
                className="button"
                onClick={() => setConcert(!concert)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Concert</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className=" button"
                onClick={() => setConcert(!concert)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + concertImg + ")",
                    "--sportsIcon": "url(" + concertIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Concert</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {dinner ? (
            <span>
              <button
                className="button"
                onClick={() => setDinner(!dinner)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Dinner</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className=" button"
                onClick={() => setDinner(!dinner)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + dinnerImg + ")",
                    "--sportsIcon": "url(" + dinnerIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Dinner</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {game ? (
            <span>
              <button
                className="button"
                onClick={() => setGame(!game)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Game</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setGame(!game)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + gameImg + ")",
                    "--sportsIcon": "url(" + gameIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Game</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {seminar ? (
            <span>
              <button
                className="button"
                onClick={() => setSeminar(!seminar)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Seminar</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className=" button"
                onClick={() => setSeminar(!seminar)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + seminarImg + ")",
                    "--sportsIcon": "url(" + seminarIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Seminar</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {conference ? (
            <span>
              <button
                className="button"
                onClick={() => setConference(!conference)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Conference</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setConference(!conference)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + conferenceImg + ")",
                    "--sportsIcon": "url(" + conferenceIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Conference</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {workshop ? (
            <span>
              <button
                className="button"
                onClick={() => setWorkshop(!workshop)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Workshop</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setWorkshop(!workshop)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + workshopImg + ")",
                    "--sportsIcon": "url(" + workshopIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Workshop</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {social ? (
            <span>
              <button
                className="button"
                onClick={() => setSocial(!social)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Social</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setSocial(!social)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + socialImg + ")",
                    "--sportsIcon": "url(" + socialIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Social</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {classCategory ? (
            <span>
              <button
                className="button"
                onClick={() => setClassCategory(!classCategory)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Class</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setClassCategory(!classCategory)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + classImg + ")",
                    "--sportsIcon": "url(" + classIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Class</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {auction ? (
            <span>
              <button
                className="button"
                onClick={() => setAuction(!auction)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Auction</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setAuction(!auction)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + auctionImg + ")",
                    "--sportsIcon": "url(" + auctionIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Auction</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {gala ? (
            <span>
              <button
                className="button"
                onClick={() => setGala(!gala)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Gala</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setGala(!gala)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + galaImg + ")",
                    "--sportsIcon": "url(" + galaIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Gala</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {festival ? (
            <span>
              <button
                className="button"
                onClick={() => setFestival(!festival)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Festival</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setFestival(!festival)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + festivalImg + ")",
                    "--sportsIcon": "url(" + festivalIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Festival</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {exercise ? (
            <span>
              <button
                className="button"
                onClick={() => setExercise(!exercise)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Exercise</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setExercise(!exercise)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + exerciseImg + ")",
                    "--sportsIcon": "url(" + exerciseIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Exercise</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {celebration ? (
            <span>
              <button
                className="button"
                onClick={() => setCelebration(!celebration)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Celebration</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setCelebration(!celebration)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + celebrationImg + ")",
                    "--sportsIcon": "url(" + celebrationIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Celebration</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
          {other ? (
            <span>
              <button
                className="button"
                onClick={() => setOther(!other)}
                style={{
                  border: "3px solid",
                  borderColor: "#FF521B",
                }}
              >
                <figure>
                  <figcaption>
                    <h4>
                      <span>Other</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          ) : (
            <span>
              <button
                className="button"
                onClick={() => setOther(!other)}
                style={{
                  // border: "3px solid",
                  borderColor: "transparent",
                }}
              >
                <figure
                  style={{
                    "--backgroundImage": "url(" + otherImg + ")",
                    "--sportsIcon": "url(" + otherIcon + ")",
                  }}
                >
                  <figcaption>
                    <h4>
                      <span>Other</span>
                    </h4>
                  </figcaption>
                </figure>
              </button>
            </span>
          )}
        </div>
      </div>
      <h1
        style={{
          marginTop: "40px",
          fontFamily: "Eina-bold",
          marginLeft: "100px",
        }}
      >
        Browse
      </h1>
      <div className="body">
        <div
          className="eventsHolder"
          style={{
            justifyContent: "center",
            margin: "10px",
          }}
        >
          {events &&
            events
              .filter((event) => {
                if (startDate === endDate) return true;
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
                return (
                  <div
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
      </div>
    </main>
  );
}

export default Events;
