import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorHandler } from '../general/error';
import { tArtworkReduxState } from './artworkTypes';

// Get data
export const artworkGetData = createAsyncThunk<
  tArtworkReduxState['list'],
  string,
  { rejectValue: string }
>('artwork/artworkGetData', async (query, thunkAPI) => {
  try {
    const response = await axios.get(encodeURI(query));
    return response.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});
