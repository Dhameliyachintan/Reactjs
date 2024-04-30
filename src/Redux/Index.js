import { combineReducers } from 'redux';// Import your items reducer
import { itemsReducer } from './Reducer';
import { FormReducer } from './Forms.reducer';

const rootReducer = combineReducers({
    items: itemsReducer,
    itemsdata: FormReducer
});

export default rootReducer;
