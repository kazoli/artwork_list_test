import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorHandler } from '../general/error';
import { tArtworkListElement } from './artworkTypes';

// Get data
export const artworkGetData = createAsyncThunk<
  { total: number; data: (tArtworkListElement & { _score?: number })[] },
  string,
  { rejectValue: string }
>('artwork/artworkGetData', async (query, thunkAPI) => {
  try {
    const response = await axios.get(encodeURI(query));
    return {
      total: response.data.pagination.total,
      data: response.data.data,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});
