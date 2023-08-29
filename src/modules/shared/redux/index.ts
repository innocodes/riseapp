import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  // Other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
