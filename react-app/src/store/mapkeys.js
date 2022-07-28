const GET_KEYS = 'mapkeys/GET_KEYS'

const getKeys = keys => ({
    type: GET_KEYS,
    keys
})

export const getApiKeys = () => async dispatch => {
    const keysResponse = await fetch('/api/maps/')
    if (keysResponse.ok) {
        const keys = await keysResponse.json()
        dispatch(getKeys(keys))
        return keys;
    }
}

const mapkeysReducer = (state, action) => {
    let newState = {...state}
    switch (action.type) {
        case GET_KEYS:
            newState =  action.keys;
            return newState;
        default:
            return newState;
      }
}

export default mapkeysReducer
