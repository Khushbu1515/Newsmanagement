import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'mySlice',
    initialState: {
      formData: {
          name: '',
          email: '',
          password: '',
          user_type: '' 
      },
      isLoggedIn:"false",
      user:"",
      inputvalue:"",
      formDatas: {
       
        email:"",
        password:""
    },
    errors:""
},
       reducers: {
      setFormData: (state, action) => {
        state.formData = action.payload;
      },
      setisLoggedIn:(state, action) => {
        state.isLoggedIn = action.payload;
      },
      setUser:(state, action) => {
        state.user = action.payload;
      },
      setInputvalue:(state, action) => {
        state.inputvalue = action.payload;
      },
      setformDatas:(state, action) => {
        state.formDatas = action.payload;
      },
      setErrors:(state, action) => {
        state.errors = action.payload;
      },
    },
  });
  
  export const { setFormData,setisLoggedIn,setUser,setInputvalue,setformDatas,setErrors} = mySlice.actions;
  export default mySlice.reducer;
