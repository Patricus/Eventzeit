/********************** ACTIONS **************************/

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const UPDATE_USER = "session/UPDATE_USER";
const DELETE_USER = "session/DELETE_USER";

/********************** ACTION CREATORS **************************/

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

const deleteUser = () => ({
  type: DELETE_USER,
});

/***************************** THUNKS ***************************************/

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
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

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const signUp =
  (username, email, password, avatar) => async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        avatar,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data));
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


export const editUser =
  (user_id, username, email, password, avatar) => async (dispatch) => {
    const response = await fetch(`/api/auth/dashboard/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user_id,
        username,
        email,
        password,
        avatar,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(updateUser(data));
      return data;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error has occured. Please try again."];
    }
  };


export const destroyUser = (userId) => async (dispatch) => {
  const response = await fetch(`/api/auth/dashboard/${userId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteUser(userId));
  }
};

/***************************** REDUCER ***************************************/

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    case REMOVE_USER:
      return { user: null };
    case UPDATE_USER:
        newState[action.payload.id] = action.payload;
        return newState;
    case DELETE_USER:
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
}
