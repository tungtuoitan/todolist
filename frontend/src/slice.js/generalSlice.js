import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDBChange:false
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    setIsDBChange: (state,action)=>{
      state.isDBChange = Math.floor(Math.random()*100)
    }
  },
});

export const { setIsDBChange } = generalSlice.actions;
export default generalSlice.reducer;
