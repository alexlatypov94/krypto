/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getCoins } from './ActionCreator';

export interface coinsInitState {
  isLoading: boolean;
  coins: { [key: string]: any };
  errorMessage: string;
}

const initialState: coinsInitState = {
  isLoading: false,
  coins: {},
  errorMessage: '',
};

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    // changeBinanceCoinsFuturePrice: (state, action) => {},
    // changeBinanceCoinsSpotPrice: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCoins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.coins = action.payload;
    });
    builder.addCase(getCoins.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message as string;
    });
  },
});

export const coinsSelector = createSelector(
  (state: RootState) => state,
  ({ coins }) => coins
);

export const coinsReducer = coinsSlice.reducer;
// export const { } = binanceSlice.actions;
