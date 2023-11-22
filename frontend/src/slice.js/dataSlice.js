import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: ["x"],
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      const dataCopy = [...state.data];
      state.data = [...dataCopy, action.payload];
    },
    editData: (state,action)=>{
      state.data = action.payload

    }
  },
});

export const { setData,editData } = dataSlice.actions;

export default dataSlice.reducer;
