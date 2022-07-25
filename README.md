# Eventzeit
---------------------------------------------------------------------------------------------------------------------------------------------
Welcome to Eventzeit! Eventzeit is a web application build for sharing events, buying tickets for said events and bookmarking events that you may want to buy tickets for in the future. The project is a clone of Eventbrite and was built using Flask, SQLAlchemy, React.js, Readux and Python.

Checkout Eventzeit and make it to an event near you at https://eventzeit.herokuapp.com

### Splash Page

# ADD SCREEN SHOT OF FINISHED SPLASH PAGE

### Events Page

# ADD SCREEN SHOT OF FINISHED EVENTS PAGE

### Event Details Page

# ADD SCREEN SHOT OF FINISHED EVENTS DETAILS PAGE

#### Technical Details:

- Event search and category filter was a very exciting feature to implement as no one in our group had an experience doing this before. On the events page a user can search all events listed on the site using a search bar and filter events even further by toggling category buttons. In order to do this, we first implemented useStates for each category in order to have a true of false value to pass through the filter.

```
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

```

- If a category box is checked, the value will be "true" and therefore will pass our filter function. The search feature turns the entered search string into a case insensitive regex expression and uses the match method to check if the value is true or false when searching all potentail values in the events list.

```
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
```
