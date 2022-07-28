import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BookmarksBar = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 40px;
background-color: red;
margin: 20px 0;
`

function BookmarksPanel({ bookmarks }) {

    return (
        <BookmarksBar>
            <h3>Bookmarked Events:</h3>
            {bookmarks.map(bookmark => {
                return <Link to={`/events/${bookmark.event_id}`} key={bookmark.id}>{bookmark.title}</Link>
            })}
        </BookmarksBar>
    );
};

export default BookmarksPanel;
