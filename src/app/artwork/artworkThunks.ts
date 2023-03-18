import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorHandler } from '../general/error';
import { tArtworkReduxState, tArtworkBaseData } from './artworkTypes';

// get main list data
export const artworkGetMainList = createAsyncThunk<
  {
    total: number;
    total_pages: number;
    data: {
      _score?: number;
      id: tArtworkBaseData['id'];
      image_id: tArtworkBaseData['imageId'];
      title: tArtworkBaseData['title'];
    }[];
  },
  string,
  { rejectValue: string }
>('artwork/artworkGetMainList', async (query, thunkAPI) => {
  try {
    const response = await axios.get(encodeURI(query));
    return {
      total: response.data.pagination.total,
      total_pages: response.data.pagination.total_pages,
      data: response.data.data,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});

// get details data
export const artworkGetDetails = createAsyncThunk<
  {
    id: tArtworkReduxState['details']['id'];
    image_id: tArtworkReduxState['details']['imageId'];
    title: tArtworkReduxState['details']['title'];
    artist_display: tArtworkReduxState['details']['artist'];
    department_title: tArtworkReduxState['details']['department'];
  },
  string,
  { rejectValue: string }
>('artwork/artworkGetDetails', async (query, thunkAPI) => {
  try {
    const response = await axios.get(encodeURI(query));
    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});
