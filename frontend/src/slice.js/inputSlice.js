import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainValue: "",
  isFocusing:false
};

export const inputSection = createSlice({
  name: "inputSection",
  initialState,
  reducers: {
    setMainValue: (state, action) => {
      state.mainValue = action.payload;
    },
    setIsFocusing:(state,action)=>{
      state.isFocusing = action.payload
    }
  },
});

export const { setMainValue,setIsFocusing } = inputSection.actions;

export default inputSection.reducer;
