import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions/actions";

export const initialState = {
    data: [],
    error: '',
    isFetching: false
}

function reducer(state = initialState, action) {
    console.log('reducer', action, state);
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;