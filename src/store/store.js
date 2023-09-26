import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "../reducers/reducers";



// combine all reducers into a single variable
const reducers = combineReducers({
    restReducer
})

//middleware
const middleware = [thunk]


// create store
const store = createStore(reducers, applyMiddleware(...middleware))

//Export default store

export default store




