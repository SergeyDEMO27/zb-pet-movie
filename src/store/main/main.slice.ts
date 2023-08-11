import { createSlice } from "@reduxjs/toolkit";

const initialState = [] as any[];

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    getInCinemaMovies: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { reducer, actions } = mainSlice;
