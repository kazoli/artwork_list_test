import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import artworkReducer from '../artwork/artworkSlice';

export const store = configureStore({
  reducer: {
    artwork: artworkReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
