// constants
const CREATE_EVENT = "event/CREATE_EVENT";
const READ_EVENT = "event/READ_EVENT";
const UPDATE_EVENT = "event/UPDATE_EVENT";
const DELETE_EVENT = "event/DELETE_EVENT";

const createEvent = event => ({
  type: CREATE_EVENT,
  payload: event,
});

const readEvent = () => ({
  type: READ_EVENT,
});

const updateEvent = event => ({
  type: UPDATE_EVENT,
  payload: event,
});

const deleteEvent = () => ({
  type: DELETE_EVENT,
});

const initialState = { event: null };

export const makeEvent =
  (
    user_id,
    category,
    name,
    event_image_url,
    date,
    description,
    price,
    occupancy,
    street_address,
    state,
    zip_code
  ) =>
  async dispatch => {
    const response = await fetch("/api/events/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        category,
        name,
        event_image_url,
        date,
        description,
        price,
        occupancy,
        street_address,
        state,
        zip_code,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(createEvent(data));
      return null;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

// export const logout = () => async dispatch => {
//   const response = await fetch("/api/auth/logout", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     dispatch(deleteUser());
//   }
// };

// export const signUp = (username, email, password) => async dispatch => {
//   const response = await fetch("/api/auth/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username,
//       email,
//       password,
//     }),
//   });

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(setUser(data));
//     return null;
//   } else if (response.status < 500) {
//     const data = await response.json();
//     if (data.errors) {
//       return data.errors;
//     }
//   } else {
//     return ["An error occurred. Please try again."];
//   }
// };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return { state, event: action.payload };
    case DELETE_EVENT:
      return { user: null };
    default:
      return state;
  }
}
