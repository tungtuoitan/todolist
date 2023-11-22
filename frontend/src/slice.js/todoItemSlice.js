import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHovering: false,
  indexOfHovering: 99,
  isEditMode: false,
  indexOfEditItem: 99,
};

export const todoItemSlice = createSlice({
  name: "todoItemSlice",
  initialState,
  reducers: {
    setIsHovering: (state, action) => {
      state.isHovering = !state.isHovering;
    },
    setIndexOfHovering: (state, action) => {
      state.indexOfHovering = action.payload;
    },
    setIsEditMode: (state, action) => {
      state.isEditMode = action.payload
    },
    setIndexOfEditItem: (state, action) => {
      state.indexOfEditItem = action.payload;
    },
  },
});

export const {
  setIsHovering,
  setIndexOfHovering,
  setIsEditMode,
  setIndexOfEditItem,
} = todoItemSlice.actions;

export default todoItemSlice.reducer;
