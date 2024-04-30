import { ADD_ITEM_SUCCESS, DELETE_ITEM_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, UPDATE_DATA_SUCCESS, UPDATE_ITEM_SUCCESS } from "./ActionType";

const initialItemsState = {
    items: [],
    error: null,
};

export const itemsReducer = (state = initialItemsState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                items: action.payload,
                error: null,
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
                error: null,
            };
        case UPDATE_DATA_SUCCESS:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
                error: null,
            };
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
                error: null,
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};