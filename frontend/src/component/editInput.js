import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditValue } from "../slice.js/editSlice";
import EditInputUI from "./editInputUI";
import { setIsEditMode } from "../slice.js/todoItemSlice";
import { editData } from "../slice.js/dataSlice";
import axios from "axios";
import { setIsDBChange } from "../slice.js/generalSlice";

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
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === indexOfEditItem) {
          dispatch(setEditValue(data[i].content));
        }
      }

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
      axios
      .post("http://192.168.1.61:80/change-data", {
        id: indexOfEditItem,
        content: editValue,
      })
      .then(() => {
        dispatch(setIsDBChange());
      })
      .catch((err) => {
        console.error(err.message);
      });

      //
      dispatch(setIsEditMode(false));
      inputRef.current.blur();
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
