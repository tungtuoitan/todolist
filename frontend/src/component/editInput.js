import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditValue } from "../slice.js/editSlice";
import EditInputUI from "./editInputUI";
import { setIsEditMode } from "../slice.js/todoItemSlice";
import { editData } from "../slice.js/dataSlice";

export default function EditInput() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const editValue = useSelector((state) => state.editSection.editValue);
  const isEditMode = useSelector((state) => state.todoItem.isEditMode);
  const indexOfEditItem = useSelector((s) => s.todoItem.indexOfEditItem);
  const inputRef = useRef();

  //# khi click editBtn
  useEffect(() => {
    if (isEditMode) {
      //# hiển thị value cần edit trong thẻ input
      dispatch(setEditValue(data[indexOfEditItem]));

      // focus vào input
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [isEditMode]);

  //# onChange
  const handleOnChange = (e) => {
    dispatch(setEditValue(e.target.value));
  };

  //# khi enter
  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      //data
      const dataCopy = [...data];
      dataCopy[indexOfEditItem] = editValue;
      dispatch(editData(dataCopy));

      //
      dispatch(setIsEditMode(false));
      inputRef.current.blur()
    }
  };

  return (
    <EditInputUI
      editValue={editValue}
      handleOnChange={handleOnChange}
      handleOnKeyDown={handleOnKeyDown}
      ref={inputRef}
    />
  );
}
