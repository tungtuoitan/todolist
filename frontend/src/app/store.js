import { configureStore } from "@reduxjs/toolkit";
import { todoItemSlice } from "../slice.js/todoItemSlice";
import { dataSlice } from "../slice.js/dataSlice";
import { editSectionSlice } from "../slice.js/editSlice";
import { inputSection } from "../slice.js/inputSlice";
import { generalSlice } from "../slice.js/generalSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,

    //#
    inputSection: inputSection.reducer,
    editSection: editSectionSlice.reducer,

    //#
    todoItem: todoItemSlice.reducer,
    general: generalSlice.reducer,
  },
});
