/********************** ACTIONS **************************/

const CREATE_EVENT = "event/CREATE_EVENT";
const READ_EVENT = "event/READ_EVENT";
const UPDATE_EVENT = "event/UPDATE_EVENT";
const DELETE_EVENT = "event/DELETE_EVENT";

/********************** ACTION CREATORS **************************/

const createEvent = event => ({
  type: CREATE_EVENT,
  payload: event,
});

const readEvent = events => ({
  type: READ_EVENT,
  payload: events,
});

const updateEvent = event => ({
  type: UPDATE_EVENT,
  payload: event,
});

const deleteEvent = eventId => ({
  type: DELETE_EVENT,
});

/***************************** THUNKS ***************************************/

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
    city,
    state,
    zipCode
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
        city,
        state,
        zipCode,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(createEvent(data));
      return data;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

export const acquireEvents = () => async dispatch => {
  const response = await fetch("/api/events/");

  if (response.ok) {
    const data = await response.json();
    dispatch(readEvent(data));
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const editEvent =
  (
    event_id,
    user_id,
    category,
    name,
    event_image_url,
    date,
    description,
    price,
    occupancy,
    street_address,
    city,
    state,
    zipCode
  ) =>
  async dispatch => {
    console.log("event", event_id);
    const response = await fetch(`/api/events/${event_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        user_id,
        category,
        name,
        event_image_url,
        date,
        description,
        price,
        occupancy,
        street_address,
        city,
        state,
        zipCode
      ),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(updateEvent(data));
      return data;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

export const removeEvent = eventId => async dispatch => {
  const response = await fetch(`/api/events/${eventId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteEvent(eventId));
  }
};

/***************************** REDUCER ***************************************/

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case CREATE_EVENT:
      const event = action.payload;
      newState[event.id] = event;
      return newState;
    case READ_EVENT:
      newState = {};
      action.payload.events.forEach(event => {
        newState[event.id] = event;
      });
      return newState;
    case UPDATE_EVENT:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_EVENT:
      delete newState[action.eventId];
      return newState;
    default:
      return state;
  }
}
