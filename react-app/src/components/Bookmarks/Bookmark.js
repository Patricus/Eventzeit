import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireEvents } from "../../store/events";
import {
  addOneBookmark,
  deleteBookmark,
  getAllBookmarks,
} from "../../store/bookmarks";

// const BookmarkEventName = styled.link`
//   cursor: pointer;
// `;

function Bookmark({ event_id, user_id = null, title }) {
  const dispatch = useDispatch();
  // if (user) {
  //   user_id = user.id;
  // }

  //if a button clicks and there is no bookmark in the bookmarks table where the user and the event matches,
  //we create a bookmark with those associations and display the button differently.

  //we need to create and delete bookmmarks on click
  //we query the state for all bookmarks where the user id matches, then look in the bookmarks to check if any of the bookmarks match both the user and event id's
  //if they do, we run the delete,
  //otherwise, we create the new bookmark

  const userBookmarks = useSelector((state) => state.bookmarks);
  // Object.values(userBookmarks).forEach((bookmark) => {
  //   if (bookmark.event_id === event_id) {
  //     componentBookmark = bookmark;
  //   }
  // });
  const [componentBookmark, setComponentBookmark] = useState(false);
  const [showBookmark, setShowBookmark] = useState(componentBookmark);

  useEffect(() => {
    dispatch(acquireEvents());
    dispatch(getAllBookmarks(user_id));
  }, [dispatch, user_id]);

  useEffect(() => {
    Object.values(userBookmarks).forEach((bookmark) => {
      if (parseInt(bookmark.event_id) === parseInt(event_id)) {
        setComponentBookmark(bookmark);
      }
    });
  }, [userBookmarks, event_id, componentBookmark]);

  const clickButton = () => {
    setShowBookmark(!showBookmark);
    if (!showBookmark) dispatch(addOneBookmark({ event_id, user_id, title }));
    else {
      dispatch(deleteBookmark(componentBookmark));
    }
  };

  return (
    <div>
      {user_id && !showBookmark && (
        <>
          <button
            className="star-button"
            onClick={clickButton}
            style={{ fontSize: "24px", padding: "6px 10px" }}
          >
            {String.fromCharCode(9734)}
          </button>
        </>
      )}
      {user_id && showBookmark && (
        <button
          className="star-button"
          onClick={clickButton}
          style={{ fontSize: "24px", padding: "6px 10px" }}
        >
          <div className="star">{String.fromCharCode(9733)}</div>
        </button>
        // {userBookmarks.map((bookmark) => {
        //   return (
        //     <NavLink to={`/events/${bookmark.event_id}`}>
        //       {bookmark.name}
        //     </NavLink>
        //   );
        // })}
      )}
    </div>
  );
}

export default Bookmark;
