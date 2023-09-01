import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {SIGN_UP_URL, SIGN_IN_URL} from '../../utils/constants';
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
    console.log('response data status here', response.data.status);
    console.log('response status here', response.status);
    return response.data && response.status;
  },
);

const loginUserAsync = createAsyncThunk(
  'user/login',
  async (loginData: UserState) => {
    console.log('inside login user');
    console.log('this is the login url', SIGN_IN_URL);
    console.log('this is the login data', loginData);
    const response = await axios.post(SIGN_IN_URL, loginData);
    console.log('LOGIN RESPONSE', response);
    console.log('LOGIN RESPONSE DATA', response.data);
    console.log('LOGIN RESPONSE STATUS', response.data.status);
    console.log('LOGIN RESPONSE STATUS', response.status);
    return response;
      // && response.status;
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
      // state.data = action.payload;
      console.log('This is the response', action.payload);
    });
    builder.addCase(registerUserAsync.rejected, (state, action) => {
      // Handle error here
      console.log('Error registering user:', action.error);
    });
    builder.addCase(loginUserAsync.fulfilled, (state, action) => {
      // Handle successful response here
      // state.data = action.payload;
      const {
        email_address,
        first_name,
        id,
        last_name,
        token,
        total_balance,
        total_returns,
        username,
      } = action.payload.data;
      state.first_name = first_name;
      state.email_address = email_address;
      state.id = id;
      state.last_name = last_name;
      state.token = token;
      state.total_balance = total_balance;
      state.total_returns = total_returns;
      state.username = username;
      console.log(
        'This is the fulfilled login response data',
        action.payload.data,
      );
      console.log('User first name', first_name);
    });
    builder.addCase(loginUserAsync.rejected, (state, action) => {
      // Handle error here
      console.log('Error logging in the user:', action.error);
    });
  },
});

// export const {registerUser} = userSlice.actions;
export {registerUserAsync, loginUserAsync};
export default userSlice.reducer;
