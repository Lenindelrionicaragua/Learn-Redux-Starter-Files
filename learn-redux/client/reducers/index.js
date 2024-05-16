import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux"; // Correct import

import posts from "./posts";
import comments from "./comments";

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer, // Correct key name
});

export default rootReducer;
