import { ADD_ITEM_SUCCESS, DELETE_ITEM_SUCCESS, FETCH_DATA_SUCCESS, UPDATE_DATA_SUCCESS } from "./ActionType"
import { itemsReducer } from "./Reducer";

const initialItemsState = {
    itemsdata: [],
    error: null,
}

export const FormReducer = (state = initialItemsState, action) => {
    console.log("action.type", action.type);
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                itemsdata: action.payload,
                error: null,
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                itemsdata: [...state.itemsdata, action.payload],
                error: null,
            };
        case UPDATE_DATA_SUCCESS:
            return {
                ...state,
                itemsdata: state.itemsdata.map((items) => {
                    if (items.id === action.payload.id) {
                        return action.payload
                    } else {
                        return items
                    }
                }
                    
                ),
                error: null,
            };
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                itemsdata: state.itemsdata.filter((item) => item.id !== action.payload),
                error: null,
            };
        default:
            return state;
    }
};