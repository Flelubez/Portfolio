import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./language";
import themeReducer from "./theme";

const rootReducer = combineReducers({
  language: languageReducer,
  theme: themeReducer,
});

export default rootReducer;
