import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {SIGN_UP_URL} from '../../utils/constants';
import {UserState} from '../../types/types';

const initialState: UserState = {
  first_name: '',
  last_name: '',
  email_address: '',
  password: '',
  date_of_birth: '',
  username: '',
  phone_number: '',
  logged_in_status: false,
};

const registerUserAsync = createAsyncThunk(
  'user/register',
  async (registrationData: UserState) => {
    console.log('inside register user');
    console.log('this is the sign up url', SIGN_UP_URL);
    console.log('this is the registration data', registrationData);
    const response = await axios.post(SIGN_UP_URL, registrationData);
    console.log('response here', response);
    console.log('response data here', response.data);
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    // Other reducers here:
  },
  extraReducers: builder => {
    builder.addCase(registerUserAsync.fulfilled, (state, action) => {
      // Handle successful response here
      state. = action.payload;
      console.log('This is the response', action.payload);
    });
    builder.addCase(registerUserAsync.rejected, (state, action) => {
      // Handle error here
      console.error('Error registering user:', action.error);
    });
  },
});

// export const {registerUser} = userSlice.actions;
export {registerUserAsync};
export default userSlice.reducer;
