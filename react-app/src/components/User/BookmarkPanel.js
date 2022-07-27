import { useSelector } from 'react-redux';
import styled from 'styled-components';

const BookmarksBar = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 40px;
background-color: red;
margin: 20px 0;
`

function BookmarksPanel() {
    const bookmarksState = useSelector(state=>state.bookmarks)
    const bookmarks = Object.values(bookmarksState)

    return (
        <BookmarksBar>
            {bookmarksState && bookmarks.map(bookmark=>{
                return <p key={bookmark.id}>{}</p>
            })}
        </BookmarksBar>
    );
};

export default BookmarksPanel;
