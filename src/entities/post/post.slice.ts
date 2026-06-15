import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@src/app/store";

type PostAction = PayloadAction<{ id: number; changes: Partial<Post> }>;

export type Post = {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
  description: string;
};

const postAdapter = createEntityAdapter<Post>();

const postSlice = createSlice({
  name: "posts",
  initialState: postAdapter.getInitialState(),
  reducers: {
    postsUpserted: postAdapter.upsertMany,

    postUpdated: (state, action: PostAction) => {
      postAdapter.updateOne(state, action.payload);
    },
  },
});

export const { postsUpserted, postUpdated } = postSlice.actions;
export const postReducer = postSlice.reducer;
export const postSelectors = postAdapter.getSelectors((state: RootState) => state.posts);
