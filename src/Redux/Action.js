import axios from 'axios';
import { ADD_DATA_REQUEST, ADD_ITEM_SUCCESS, DELETE_ITEM_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, UPDATE_DATA_FAILURE, UPDATE_DATA_REQUEST, UPDATE_DATA_SUCCESS } from './ActionType';


export const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_DATA_REQUEST });
        try {
            const response = await axios.get('http://localhost:4000/items');
            dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
        }
    };
};

export const addData = (formData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_DATA_REQUEST });
        try {
            const response = await axios.post('http://localhost:4000/items', formData);
            dispatch({ type: ADD_ITEM_SUCCESS, payload: response.data });
            dispatch(fetchData());
        } catch (error) {
            dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
        }
    };
};

export const updateData = (id, updatedData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_DATA_REQUEST });
        try {
            const response = await axios.put(`http://localhost:4000/items/${id}`, updatedData);
            dispatch({ type: UPDATE_DATA_SUCCESS, payload: response.data });
            dispatch(fetchData()); // Fetch updated data after updating
        } catch (error) {
            dispatch({ type: UPDATE_DATA_FAILURE, payload: error.message });
        }
    };
};

export const deleteData = (id) => {
    return async (dispatch) => {
        try {
            const response =  await axios.delete(`http://localhost:4000/items/${id}`);
            dispatch({ type: DELETE_ITEM_SUCCESS, payload: response.data });
            dispatch(fetchData()); // Fetch updated data after deletion
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };
};