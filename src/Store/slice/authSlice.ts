import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: 0,
  },
  reducers: {
  
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
