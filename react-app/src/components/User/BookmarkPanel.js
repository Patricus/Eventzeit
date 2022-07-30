import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BookmarksBar = styled.div`
    width: 100%;
    margin: 20px 0;
`;

function BookmarksPanel({ bookmarks }) {
    const events = useSelector(state => state.events);

    return (
        <>
            {events && (
                <div className="bookmarks-sidebar">
                    {bookmarks.length > 0 && (
                        <BookmarksBar>
                            <h3>Bookmarked Events</h3>
                            <div className="bookmarks">
                                {bookmarks.map(bookmark => {
                                    return (
                                        events[bookmark.event_id] && (
                                            <Link
                                                to={`/events/${bookmark.event_id}`}
                                                key={bookmark.id}
                                                className="bookmarkLinks">
                                                {events[bookmark.event_id].name}
                                            </Link>
                                        )
                                    );
                                })}
                            </div>
                        </BookmarksBar>
                    )}
                </div>
            )}
        </>
    );
}

export default BookmarksPanel;
