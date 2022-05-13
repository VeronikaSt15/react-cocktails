import {combineReducers} from  "redux";
import cocktailReducer from "./reducer";

const rootReducer = combineReducers({
    data: cocktailReducer,
});

export default rootReducer;