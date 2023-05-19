import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_PROVINCES_REQUEST,
} from 'shared/constants/ActionTypes';

export const fetchProvinces = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    fetch('http://10.79.60.2:8500/vcat/provinces')
      .then((data) => data.json())
      .then((data) => {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: FETCH_PROVINCES_REQUEST, payload: data.data});
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};
