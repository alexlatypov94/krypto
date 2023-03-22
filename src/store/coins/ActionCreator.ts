import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { Coins } from '../../services';

export const coinsAction = 'coins/getCoins';

export const getCoins = createAsyncThunk(coinsAction, async (_, { rejectWithValue }) => {
  try {
    const res = await Coins.getCoins();

    return res.data;
  } catch (error) {
    return rejectWithValue((error as AxiosError).response?.data);
  }
});
