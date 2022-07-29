import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BookmarksBar = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 40px;
background-color: red;
margin: 20px 0;
`

function BookmarksPanel({ bookmarks }) {

    return (
        <div className="bookmarks-sidebar">
            {bookmarks.length > 0 &&
                <BookmarksBar>
                    <h3>Bookmarked Events:</h3>
                    {bookmarks.map(bookmark => {
                        return <Link to={`/events/${bookmark.event_id}`} key={bookmark.id}>{bookmark.title}</Link>
                    })}
                </BookmarksBar>
            }
        </div>
    );
};

export default BookmarksPanel;
