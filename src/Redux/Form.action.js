import axios from "axios"
import { ADD_ITEM_SUCCESS, DELETE_DATA_FAILURE, DELETE_ITEM_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, UPDATE_DATA_FAILURE, UPDATE_DATA_SUCCESS } from "./ActionType"

export const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_DATA_REQUEST });
        try {
            const response = await axios.get('http://localhost:4000/form');
            dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FETCH_DATA_FAILURE, payload: error.data })
        }
    }
}

export const adddata = (fromData) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_DATA_REQUEST });
        try {
            const response = await axios.post("http://localhost:4000/form", fromData);
            dispatch({ type: ADD_ITEM_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FETCH_DATA_FAILURE, payload: error.error })
        }
    }
}

export const updatedata = (formState, id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_DATA_REQUEST });
        try {
            const response = await axios.put(`http://localhost:4000/form/${id}`, formState)
            dispatch({ type: UPDATE_DATA_SUCCESS, payload: response.data })
        } catch(error) {
            dispatch({type : UPDATE_DATA_FAILURE, payload : error.error})
        }
    }
}

export const deletedata = (id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_DATA_REQUEST });
        try {
            await axios.delete(`http://localhost:4000/form/${id}`);
            dispatch({ type: DELETE_ITEM_SUCCESS, payload: id });
        } catch (error) {
            dispatch({ type: DELETE_DATA_FAILURE, payload: error.error })
        }
    };
};