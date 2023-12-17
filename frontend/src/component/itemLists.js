import axios from "axios";
import Item from "./item.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setIsDBChange } from "../slice.js/generalSlice.js";
import { setData } from "../slice.js/dataSlice.js";

export default function ItemLists() {
  const dispatch = useDispatch()
  const data = useSelector(state=>state.data.data)
  const isDBChange = useSelector((state) => state.general.isDBChange);

  // lấy data
  useEffect(() => {
    axios
      .get("http://192.168.1.61:80/get-data")
      .then((res) => {
        dispatch(setData(res.data))
      })
      .catch((err) => {
        console.log("get-data thất bại", err);
      });
  }, [isDBChange]);

  return (
    <div className="w-full flex justify-center overflow-auto  mt-6 mb-10  h-c200 ">
      <div className="w-2/3 caret-transparent">
        {data.map((item, index) => {
          return <Item key={index} item={item} index={item.id} />;
        })}
      </div>
    </div>
  );
}
