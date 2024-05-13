import { combineReducers } from "redux";
import { routerReducer } from "react-routes-redux";

import posts from "./posts";
import comments from "./comments";

const rootReducer = combineReducers({ posts, comments, router: routerReducer });
