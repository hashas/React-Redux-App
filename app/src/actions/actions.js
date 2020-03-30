import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getAPI = () => dispatch => {
    dispatch({type: FETCH_START});
    axios
        .get('https://api.covid19api.com/summary')
        .then(res => 
            dispatch({type: FETCH_SUCCESS, payload: res.data["Countries"]})
        )
        .catch(err => dispatch({type: FETCH_FAIL, payload: err }));
}