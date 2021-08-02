import {combineReducers} from "redux"
import authReducer from "./AuthReducer"
import streamReducer from "./streamReducer"
import selectReducer from "./SelectReducer"
import {reducer} from "redux-form"
export default combineReducers({
    auth:authReducer,
    form:reducer,
    streams:streamReducer,
    selected:selectReducer
})