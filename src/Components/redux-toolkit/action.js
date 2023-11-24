import { createAsyncThunk } from "@reduxjs/toolkit";
import {  API } from "../../../utils";

//For login user
export const Register = createAsyncThunk(
  "auth/login",
  async (params, thunkAPI) => {
    try {
      const { data, accessToken } = await API.post("user/signup", params);
      Storage.setToken(accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//For user profile
export const profile = createAsyncThunk("auth/profile", async (_, thunkAPI) => {
  try {
    const { data } = await API.get("auth/profile");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
