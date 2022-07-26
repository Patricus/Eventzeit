const ADD_BOOKMARK = "bookmark/ADD_BOOKMARK";
const GET_ALL_BOOKMARKS = "bookmark/GET_ALL_BOOKMARKS";
const REMOVE_BOOKMARK = "bookmark/REMOVE_BOOKMARK";

const add = (bookmark) => ({
  type: ADD_BOOKMARK,
  bookmark,
});

const load = (bookmarks) => ({
  type: GET_ALL_BOOKMARKS,
  bookmarks,
});

const remove = (id) => ({
  type: REMOVE_BOOKMARK,
  id,
});

export const addOneBookmark =
  ({ event_id, user_id }) =>
  async (dispatch) => {
    const response = await fetch(`/api/bookmarks/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id, event_id }),
    });
    if (response.ok) {
      const bookmark = await response.json();
      // console.log(bookmark)
      dispatch(add(bookmark));
      return bookmark;
    }
  };

export const getAllBookmarks = (userId) => async (dispatch) => {
  const response = await fetch(`/api/bookmarks/${userId}`);
  if (response.ok) {
    const bookmarks = await response.json();
    dispatch(load(bookmarks));
  }
};

export const deleteBookmark = (componentBookmark) => async (dispatch) => {
  console.log(componentBookmark);
  const response = await fetch(
    `/api/bookmarks/delete/${componentBookmark.id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(componentBookmark),
    }
  );
  if (response.ok) {
    const id = await response.json();
    console.log(id);
    dispatch(remove(id));
  }
};

const initialState = {};

const bookmarksReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case ADD_BOOKMARK:
      newState[action.bookmark.id] = action.bookmark;
      return newState;
    // case GET_ONE_BOOKMARK:
    //   action.bookmarks.bookmarks[]
    //     // this is normallizing. youre setting the id as the key for the value of the bookmark O of 1 lookup time
    //   });
    //   return newState;
    // case GET_ALL_BOOKMARKS:
    //   newState = {};
    //   action.bookmarks.bookmarks.forEach((bookmark) => {
    //     newState[bookmark.id] = bookmark;
    //     // this is normallizing. youre setting the id as the key for the value of the bookmark O of 1 lookup time
    //   });
    // return newState;
    case GET_ALL_BOOKMARKS:
      newState = {};
      action.bookmarks.bookmarks.forEach((bookmark) => {
        newState[bookmark.id] = bookmark;
        // this is normallizing. youre setting the id as the key for the value of the bookmark O of 1 lookup time
      });
      return newState;
    case REMOVE_BOOKMARK:
      delete newState[action.id.id];
      return newState;
    default:
      return newState;
  }
};

export default bookmarksReducer;
