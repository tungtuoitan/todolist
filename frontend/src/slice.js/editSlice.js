import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editValue: "",
};

export const editSectionSlice = createSlice({
  name: "editSectionSlice",
  initialState,
  reducers: {
    setEditValue: (state, action) => {
      state.editValue = action.payload;
    },
  },
});

export const { setEditValue } = editSectionSlice.actions;

export default editSectionSlice.reducer;
