import { useSelector } from "react-redux";
import EventsCard from "../Events/Elements/EventsCard";

function MyEventsPanel() {
    const user = useSelector(state => state.session.user);
    const userEventsState = useSelector(state => state.events);
    const userEvents = Object.values(userEventsState).filter(event => event.user_id === user.id);

    return (
        <div className="my-event-panel">
            <h2
                style={{
                    padding: "6px",
                    marginLeft: "40vw",
                    fontFamily: "Eina-semibold",
                    fontSize: "40px",
                }}>
                Your Events
            </h2>
            <div
                className="eventsHolder"
                style={{
                    marginLeft: "20px",
                    //   justifyContent: "center",
                }}>
                {userEvents.length ? (
                    userEvents.map(event => {
                        return (
                            <div key={event.id}
                                style={{
                                    height: "333px",
                                    width: "333px",
                                    margin: "11px",
                                }}>
                                <EventsCard key={event.id} event={event} />
                            </div>
                        );
                    })
                ) : (
                    <h2>You Don't have any events, yet!</h2>
                )}
            </div>
        </div>
    );
}

export default MyEventsPanel;
