import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_CATEGORIES_REQUEST,
} from 'shared/constants/ActionTypes';

export const fetchAllCategories = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    fetch('http://10.79.60.2:8500/vcat/categories/all')
      .then((data) => data.json())
      .then((data) => {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: FETCH_CATEGORIES_REQUEST, payload: data.data});
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};
