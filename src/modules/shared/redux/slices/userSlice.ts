import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {axios} from 'axios';
import {SIGN_UP_URL} from '../../utils/constants';
import {UserState} from '../../types/types';

const initialState: UserState = {
  first_name: '',
  last_name: '',
  email_address: '',
  password: '',
  date_of_birth: '',
  user_name: '',
  phone_number: '',
  logged_in_status: false,
};

export const registerUser = createAsyncThunk(
  'user/register',
  async (registrationData: UserState) => {
    const response = await axios.post(SIGN_UP_URL, registrationData);
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    // Other reducers here:
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      // Handle successful response here
      console.log('This is the response', action.payload);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      // Handle error here
      console.error('Error registering user:', action.error);
    });
  },
});

export const {registerUser} = userSlice.actions;
export default userSlice.reducer;
