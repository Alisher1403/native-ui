import { combineReducers } from "@reduxjs/toolkit";
import { postReducer } from "@src/entities/post/post.slice";

export const rootReducer = combineReducers({
  posts: postReducer,
});
