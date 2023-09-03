import { createSlice } from '@reduxjs/toolkit';
import { DiscoverReqData } from '../../types';

const initialState: { filter: DiscoverReqData } = { filter: {} };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { reducer, actions } = filterSlice;
