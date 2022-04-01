import React from "react";
import s from "./ImgList.module.css";

export const ImgList = ({ list }) => {
  return list.map((el) => (
    <img src={el.url} className={s.grid_item} key={el.id} />
  ));
};
