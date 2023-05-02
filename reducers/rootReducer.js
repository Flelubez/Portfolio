import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./language";

const rootReducer = combineReducers({
  language: languageReducer,
});

export default rootReducer;
